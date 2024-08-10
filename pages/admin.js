import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Modal, Button as BootstrapButton,  Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUsers, faClipboard, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Button = styled.button`
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &.btnPrimary {
    background-color: #007bff;
    color: #ffffff;
    
    &:hover {
      background-color: #0056b3;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &.btnWarning {
    background-color: #ffc107;
    color: #ffffff;
    
    &:hover {
      background-color: #e0a800;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &.btnDanger {
    background-color: #dc3545;
    color: #ffffff;
    
    &:hover {
      background-color: #c82333;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &.btnSuccess {
    background-color: #28a745;
    color: #ffffff;
    
    &:hover {
      background-color: #218838;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #1C2434;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #fff;

  &:hover {
    background-color: #3b4755;
    transform: translateY(-2px);
  }

  &.active {
    background-color: #3b4755;
    transform: translateY(-2px);
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color:#F1F5F9;
  overflow-y: auto;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
text-align: center;
  padding: 12px;
  background-color: #fff;
`;

const Td = styled.td`
text-align: center;
  padding: 12px;
`;

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [view, setView] = useState('users');
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      role: '',
      password: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'delete'
    const [deleteUserId, setDeleteUserId] = useState(null);
    const router = useRouter();
  
    useEffect(() => {
      const fetchUserRole = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            router.push('/signin');
            return;
          }
  
          const decoded = jwtDecode(token);
          const userId = decoded.id;
  
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
  
          const response = await axios.get(`http://148.113.194.169:5000/api/users/${userId}`, config);
          const userRole = response.data.role;
  
          if (userRole === 'admin') {
            setIsAdmin(true);
            fetchUsers(); // Ensure fetchUsers is called after setting admin state
          } else {
            router.push('/unauthorized');
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          router.push('/signin');
        }
      };
  
      fetchUserRole();
    }, [router]);
  
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
  
        const response = await axios.get('http://148.113.194.169:5000/api/users/all', config);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleUserSelect = (user) => {
      setSelectedUser(user);
      setForm({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        telephone: user.telephone,
        role: user.role,
        password: '' // Do not pre-fill password
      });
      setModalType('edit');
      setShowModal(true);
    };
  
    const handleAddUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
  
        await axios.post('http://148.113.194.169:5000/api/users/signup', form, config);
        fetchUsers();
        setShowModal(false);
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          telephone: '',
          role: '',
          password: ''
        });
        toast.success('User added successfully!');
      } catch (error) {
        console.error('Error adding user:', error);
        toast.error('Error adding user.');
      }
    };
  
    const handleUpdateUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
  
        await axios.put(`http://148.113.194.169:5000/api/users/${selectedUser._id}`, form, config);
        fetchUsers();r
        setShowModal(false);
        setSelectedUser(null);
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          telephone: '',
          role: '',
          password: ''
        });
        toast.success('User updated successfully!');
      } catch (error) {
        console.error('Error updating user:', error);
        toast.error('Error updating user.');
      }
    };
  
    const handleDeleteUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
  
        await axios.delete(`http://148.113.194.169:5000/api/users/${deleteUserId}`, config);
        fetchUsers();
        setShowModal(false);
        toast.success('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('Error deleting user.');
      }
    };
  
    const renderContent = () => {
        if (view === 'users') {
          return (
            <Card>
            <Button
              className="btnSuccess float-end mb-3"
              onClick={() => {
                setModalType('add');
                setShowModal(true);
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> Add User
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr className="centerAlign ">
                  <th >ID</th> 
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Telephone</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr className="centerAlign" key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.telephone}</td>
                    <td>{user.role}</td>
                    <td>
                      <Button className=" btnWarning mb-3 me-3" onClick={() => handleUserSelect(user)}>
                        Edit
                      </Button>
                      <Button
                        className="btnDanger"
                        onClick={() => {
                          setDeleteUserId(user._id);
                          setModalType('delete');
                          setShowModal(true);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
          
          );
        } else if (view === 'posts') {
          return <Card><div>All Company Posts</div></Card>;
        } else if (view === 'cvs') {
          return <Card><div>All Users' CVs</div></Card>;
        }
      };
    
      const renderModal = () => {
        if (modalType === 'delete') {
          return (
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
              <Modal.Footer>
                <BootstrapButton variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </BootstrapButton>
                <BootstrapButton variant="danger" onClick={handleDeleteUser}>
                  Delete
                </BootstrapButton>
              </Modal.Footer>
            </Modal>
          );
        }
    
        return (
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{modalType === 'add' ? 'Add User' : 'Edit User'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    type="text"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="Telephone"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Role"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btnSecondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button
                className={modalType === 'add' ? 'btnPrimary' : 'btnWarning'}
                onClick={modalType === 'add' ? handleAddUser : handleUpdateUser}
              >
                {modalType === 'add' ? 'Add User' : 'Update User' }
              </Button>
            </Modal.Footer>
          </Modal>
        );
      };
    
      if (!isAdmin) {
        return <div>Loading...</div>; // Or any loading indicator
      }
    
      return (
        <Container>
          <Sidebar>
            <SidebarHeader>Admin Panel</SidebarHeader>
            <SidebarItem className={view === 'users' ? 'active' : ''} onClick={() => setView('users')}>
              <Icon><FontAwesomeIcon icon={faUsers} /></Icon>
              All Users
            </SidebarItem>
            <SidebarItem className={view === 'posts' ? 'active' : ''} onClick={() => setView('posts')}>
              <Icon><FontAwesomeIcon icon={faClipboard} /></Icon>
              All Company Posts
            </SidebarItem>
            <SidebarItem className={view === 'cvs' ? 'active' : ''} onClick={() => setView('cvs')}>
              <Icon><FontAwesomeIcon icon={faFileAlt} /></Icon>
              All Users' CVs
            </SidebarItem>
          </Sidebar>
          <MainContent>
            <h1>Admin Page</h1>
            {renderContent()}
            {renderModal()}
          </MainContent>
        </Container>
      );
    };
  
  export default Admin;