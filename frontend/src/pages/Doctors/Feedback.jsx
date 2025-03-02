import { useState } from 'react';
import patientAvatar from '../../assets/images/patient-avatar4.jpg';
import { formatDate } from '../../utils/formateDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm'; // Default import, no curly braces

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div className='mb-[50px]'>
      <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
        All reviews (698)
      </h4>

      <div className='flex justify-between gap-10 md-[30px]'>
        <div className='flex gap-3'>
          <figure className='w-15 h-10 rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={patientAvatar} alt='' />
          </figure>

          <div>
            <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Suchi Clovi</h5>
            <p className='text-[14px] leading-6 text-textColor'>
              {formatDate('02-14-2023')}
            </p>
            <p className='text_para mt-3 font-medium text-[15px]'>
              🌟 Dr. Kevin Silva provided exceptional care during my treatment. His expertise and compassion truly made a difference. Highly recommend! 👏
            </p>
          </div>
        </div>

        <div className='flex gap-1'>
          { [...Array(5)].map((_, index) => (
            <AiFillStar key={index} color='#0067FF' />
          ))}
        </div>
      </div>

      {/* Conditionally rendering Feedback button and form  */}
      {!showFeedbackForm && (
        <div className='text-center'>
          <button className='btn' onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {/* Showing FeedbackForm and "Cancel" button when form is open  */}
      {showFeedbackForm && (
        <div className='mt-5'>
          <FeedbackForm />
          <div className='text-center mt-3'>
            <button className='btn' onClick={() => setShowFeedbackForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
