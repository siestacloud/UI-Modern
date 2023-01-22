# dev
# расшифровать
cat .helm/values-dev-encrypted.yaml | werf helm secret decrypt -o .helm/values-dev-decrypted.yaml

# зашифровать
cat .helm/values-dev-decrypted.yaml | werf helm secret encrypt -o .helm/values-dev-encrypted.yaml




# prod
# расшифровать
cat .helm/values-prod-encrypted.yaml | werf helm secret decrypt -o .helm/values-prod-decrypted.yaml

# зашифровать
cat .helm/values-prod-decrypted.yaml | werf helm secret encrypt -o .helm/values-prod-encrypted.yaml
.