import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData, setCurrentStep, updateDaoInfo } from '../redux/daoSlice';
import { Info } from 'lucide-react';
import styled from 'styled-components';
import TopHeader from './Header';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.6s ease;
  margin-top: 80px;

  button:focus {
    outline: none;
  }

  .header-border {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
    margin-bottom: 3rem;
  }
`;

const Progress = styled.div`
  background: #e2e8f0;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const ProgressBar = styled.div`
  width: 50%;
  height: 100%;
  background: #CA1111;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0b1b27;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #183B56;
  margin-bottom: 1rem;
`;

const LearnMore = styled.a`
  color: #CA1111;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #0b1b27;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  width: 100%;
  background-color: white;
  color: black;

  &:focus {
    outline: none;
    border-color: #CA1111;
    box-shadow: 0 0 0 2px rgba(202, 17, 17, 0.1);
  }
`;


const SubdomainInput = styled.div`
  display: flex;
  align-items: center;
  
  input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const SubdomainSuffix = styled.span`
  padding: 0.53rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: none;
  border-radius: 0 0.5rem 0.5rem 0;
  color: #64748b;
`;

const CharCount = styled.div`
  text-align: right;
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 0.25rem;
`;

const FileInput = styled.div`
  border: 2px dashed #e2e8f0;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: white;
  width: 100%;
  max-width: 300px;
  position: relative;
  
  &:hover {
    border-color: #CA1111;
    background-color: rgba(202, 17, 17, 0.02);
  }

  input[type="file"] {
    display: none;
  }
`;

const UploadIcon = styled.div`
  font-size: 2rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

const UploadText = styled.div`
  p {
    margin: 0;
    
    &:first-child {
      color: #0b1b27;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    
    &:last-child {
      color: #64748b;
      font-size: 0.875rem;
    }
  }
`;

const PreviewContainer = styled.div`
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;
  background-color: white;
  color: black;
  
  &:focus {
    outline: none;
    border-color: #CA1111;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }
`;

const LinkGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const AddLink = styled.button`
  color: #CA1111;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 0;
  text-align: end;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.primary ? `
    background: #CA1111;
    color: white;
    border: none;

    &:hover {
      background: #a30d0d;
    }
  ` : `
    background: white;
    color: #0b1b27;
    border: 1px solid #e2e8f0;

    &:hover {
      border-color: #CA1111;
    }
  `}
`;

const SubText = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const ErrorMessage = styled.div`
  color: #CA1111;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const FormGroupWrapper = styled.div`
  scroll-margin-top: 140px; // This creates space from the header when scrolling
`;

const DescribeDao = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    name: '',
    subdomain: '',
    description: '',
    logo: null,
    links: [{ name: '', url: '' }]
  });

  const [preview, setPreview] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormState({
        ...formState,
        logo: file
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setFormState({
      ...formState,
      logo: null
    });
    setPreview(null);
  };

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const [errors, setErrors] = useState({
    name: false,
    subdomain: false,
    description: false
  });

  const handleNext = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      name: false,
      subdomain: false,
      description: false
    });

    let hasErrors = false;
    const newErrors = {
      name: !formState.name.trim(),
      subdomain: !formState.subdomain.trim(),
      description: !formState.description.trim()
    };

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      hasErrors = true;
      setErrors(newErrors);

      // Find first error and scroll to it
      const firstErrorField = Object.keys(newErrors).find(key => newErrors[key]);
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // If no errors, proceed with form submission
    dispatch(setFormData(formState));
    dispatch(updateDaoInfo({
      name: formState.name,
      subdomain: formState.subdomain,
      description: formState.description,
      logo: formState.logo,
      links: formState.links.filter(link => link.name && link.url)
    }));
    dispatch(setCurrentStep('membership'));
  };


  const handleLinkChange = (index, field, value) => {
    const newLinks = [...formState.links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setFormState({ ...formState, links: newLinks });
  };

  const addLink = () => {
    setFormState({
      ...formState,
      links: [...formState.links, { name: '', url: '' }]
    });
  };


  const handleBack = () => {
    dispatch(setCurrentStep('blockchain'));
  };

  return (
    <>
      <TopHeader />
      <PageContainer>
        <div className='header-border'>
          <Progress>
            <ProgressBar />
          </Progress>

          <Header>
            <Title>Describe your DAO</Title>
            <Description>
              Name and define your DAO so new contributors know they've come to the right place. This information is displayed on the DAO Explore page and can be changed with a vote.
            </Description>
            <LearnMore href="#">
              Learn more
              <span>→</span>
            </LearnMore>
          </Header>
        </div>

        <Form onSubmit={handleNext}>
          <FormGroupWrapper id="name">
            <FormGroup>
              <Label>Name</Label>
              <SubText>Maximum of 128 characters</SubText>
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleFormChange}
                  placeholder="Type your DAO's name..."
                  maxLength="128"
                  aria-invalid={errors.name}
                  style={{ borderColor: errors.name ? '#CA1111' : undefined }}
                />
                <CharCount>{formState.name.length}/128</CharCount>
                {errors.name && (
                  <ErrorMessage>Please enter your DAO's name</ErrorMessage>
                )}
              </div>
            </FormGroup>
          </FormGroupWrapper>

          <FormGroupWrapper id="subdomain">
            <FormGroup>
              <Label>ENS Subdomain</Label>
              <SubText>This will be your DAO's unique ENS subdomain, created automatically for you. Lowercase letters, numbers, and the dash "-" are all acceptable characters.</SubText>
              <SubdomainInput>
                <Input
                  type="text"
                  name="subdomain"
                  value={formState.subdomain}
                  onChange={handleFormChange}
                  placeholder="your-dao"
                  aria-invalid={errors.subdomain}
                  style={{ borderColor: errors.subdomain ? '#CA1111' : undefined }}
                />
                <SubdomainSuffix>.dao.eth</SubdomainSuffix>
              </SubdomainInput>
              {errors.subdomain && (
                <ErrorMessage>Please enter an ENS subdomain</ErrorMessage>
              )}
            </FormGroup>
          </FormGroupWrapper>

          <FormGroup>
            <Label>Logo (Optional)</Label>
            <SubText>Upload a logo to help people recognize your DAO.</SubText>

            {preview ? (
              <PreviewContainer>
                <img src={preview} alt="Logo preview" />
                <button type="button" onClick={removeLogo}>
                  ✕
                </button>
              </PreviewContainer>
            ) : (
              <FileInput>
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <label htmlFor="logo-upload">
                  <UploadIcon>+</UploadIcon>
                  <UploadText>
                    <p>Click to upload or drag and drop</p>
                    <p>PNG, JPG, or GIF (max. 3MB)</p>
                  </UploadText>
                </label>
              </FileInput>
            )}
          </FormGroup>

          <FormGroupWrapper id="description">
            <FormGroup>
              <Label>Description</Label>
              <SubText>Describe your DAO's purpose in a few sentences. This is listed on the Explore page so new contributors can find you.</SubText>
              <TextArea
                name="description"
                value={formState.description}
                onChange={handleFormChange}
                placeholder="Type your summary..."
                aria-invalid={errors.description}
                style={{ borderColor: errors.description ? '#CA1111' : undefined }}
              />
              {errors.description && (
                <ErrorMessage>Please enter a description</ErrorMessage>
              )}
            </FormGroup>
          </FormGroupWrapper>

          <FormGroup>
            <Label>Links (Optional)</Label>
            <SubText>Links to your DAO's website, social media profiles, Discord, or other places your community gathers.</SubText>

            {formState.links.map((link, index) => (
              <LinkGroup key={index}>
                <Input
                  type="text"
                  placeholder="Lens, Discord, etc."
                  value={link.name}
                  onChange={(e) => handleLinkChange(index, 'name', e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="https://"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                />
              </LinkGroup>
            ))}

            <AddLink type="button" onClick={addLink}>
              Add link
            </AddLink>
          </FormGroup>

          <Navigation>
            <Button type="button" onClick={handleBack}>Back</Button>
            <Button primary type="submit">Next</Button>
          </Navigation>
        </Form>
      </PageContainer>
    </>
  );
};

export default DescribeDao;