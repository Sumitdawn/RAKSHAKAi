from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings

class RAGService:
    def __init__(self, chroma_dir: str):
        self.embeddings = OpenAIEmbeddings()
        self.vectorstore = Chroma(directory=chroma_dir, embedding_function=self.embeddings)

    def ingest_documents(self, documents: list[dict]):
        texts = [doc['text'] for doc in documents]
        metadata = [doc.get('metadata', {}) for doc in documents]
        self.vectorstore.add_texts(texts=texts, metadatas=metadata)

    def ask(self, query: str) -> str:
        docs = self.vectorstore.similarity_search(query, k=3)
        combined = ' '.join([doc.page_content for doc in docs])
        return combined[:2000] + '...'
