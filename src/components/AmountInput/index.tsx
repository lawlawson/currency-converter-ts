import { BsArrowLeftRight } from 'react-icons/bs';

const AmountInput = () => {
  return (
    <div>
      <p>
        <strong>Amount</strong>
      </p>
      <div className='row'>
        <div className='col-10'>
          <input
            type='text'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div className='col-2 text-end'>
          <BsArrowLeftRight
            size={40}
            onClick={() => {
              alert('clicked');
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AmountInput;
