import ollama

response = requests.post(
    'http://localhost:11434/api/generate',
    json={
        'model': 'gemma:2b',
        'prompt': 'What is the capital of France?'
    }
)

print(response.json()['response'])
