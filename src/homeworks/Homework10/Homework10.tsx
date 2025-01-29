import { ChangeEvent, useEffect, useState  } from "react";
import axios from "axios";

import { Homework10Wrapper, ResultBlock, ImageBlock , ErrorBlock} from './styles';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button'; 
import Spinner from "../../components/Spinner/Spinner";

function Homework10() {
    const [firstInput, setFirstInput] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstInput(event.target.value);
      };

    const fetchHundImage = async () => {
        setIsLoading(true); 
        setError(null);
        try {
          const response = await axios.get('https://dog.ceo/api/breeds/image/random');
          setImageUrl(response.data.message); 
        } catch (error) {
            setError('Ошибка при загрузке картинки');
          //console.error('Fehler:', error);
        } finally {
            setIsLoading(false); // Останавливаем индикатор загрузки
        }
      };

    useEffect(() => {
        if (firstInput.trim()) {
          fetchHundImage(); 
        }
      }, [firstInput]);

    return (
        <Homework10Wrapper>
          <Input
            name="first-input"
            value={firstInput}
            onChange={handleChange}
            placeholder="Sсрreiben Sie Text ein"
          />
          <Button
            name="Image"
            onClick={fetchHundImage} 
            disabled={!firstInput.trim()} 
          />

          {isLoading && <Spinner />}

          
          {imageUrl && (
            <ResultBlock>
              <ImageBlock src={imageUrl} alt="Random Hund" />
            </ResultBlock>
          )}

        
        {error && <ErrorBlock>{error}</ErrorBlock>}
        </Homework10Wrapper>
      );
    }
    
    export default Homework10;