import React, { useState } from 'react';
import axios from 'axios';

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const uploadPdf = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://148.113.194.169:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob', // important for file download
      });

      // Create a link element to download the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'processed.pdf');
      document.body.appendChild(link);
      link.click();

      setLoading(false);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Failed to upload file.');
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      uploadPdf(selectedFile);
    }
  };

  return (
    <div>
      <h1>Upload and Process PDF</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {loading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUploadComponent;
