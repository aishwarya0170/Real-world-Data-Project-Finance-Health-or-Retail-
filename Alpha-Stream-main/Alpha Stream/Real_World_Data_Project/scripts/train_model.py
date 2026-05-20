import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import jobid
import os

# 1. Load Data
def load_data(filepath):
    print("Loading dataset...")
    df = pd.read_csv(filepath)
    df['Date'] = pd.to_datetime(df['Date'])
    return df

# 2. Preprocessing
def preprocess(df):
    print("Preprocessing data...")
    # Create Lag Features
    df['Prev_Close'] = df['Close'].shift(1)
    df['MA5'] = df['Close'].rolling(window=5).mean()
    df.dropna(inplace=True)
    
    # Feature Selection
    X = df[['Open', 'High', 'Low', 'Volume', 'Prev_Close', 'MA5']]
    y = df['Close']
    return X, y

# 3. Model Training
def train_model(X, y):
    print("Training Random Forest Model...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Evaluation
    predictions = model.predict(X_test)
    mse = mean_squared_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)
    print(f"Model Trained. MSE: {mse:.4f}, R2: {r2:.4f}")
    
    return model

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(current_dir, "../dataset/stock_data.csv")
    
    data = load_data(data_path)
    X, y = preprocess(data)
    model = train_model(X, y)
    
    # Save model
    # joblib.dump(model, '../models/stock_model.pkl')
    print("Project Execution Complete.")
