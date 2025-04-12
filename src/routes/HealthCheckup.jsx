import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const HealthCheckup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    basicInfo: {
      name: '',
      age: '',
      gender: '',
    },
    physicalCharacteristics: {
      height: '',
      weight: '',
      bodyType: '',
      skinType: '',
    },
    healthConcerns: {
      primaryConcern: '',
      secondaryConcerns: [],
      chronicConditions: [],
    },
    lifestyle: {
      diet: '',
      sleepPattern: '',
      exerciseFrequency: '',
      stressLevel: '',
    },
    doshaAssessment: {
      vata: 0,
      pitta: 0,
      kapha: 0,
    }
  });

  const navigate = useNavigate();

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedArray = checked
        ? [...formData[section][name], value]
        : formData[section][name].filter(item => item !== value);
      
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [name]: updatedArray
        }
      });
    } else {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [name]: value
        }
      });
    }
  };

  const handleDoshaSelection = (dosha, value) => {
    setFormData({
      ...formData,
      doshaAssessment: {
        ...formData.doshaAssessment,
        [dosha]: value
      }
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or chatbot API
    console.log('Form submitted:', formData);
    
    // Navigate to chatbot interface with the collected data
    navigate('/ayurvedic-chatbot', { state: { healthData: formData } });
  };

  // Common health concerns for checkbox options
  const commonConcerns = [
    'Digestive issues', 'Stress/Anxiety', 'Insomnia', 'Joint pain',
    'Skin problems', 'Low energy', 'Weight management', 'Respiratory issues',
    'Hormonal imbalance', 'Headaches/Migraines'
  ];

  const chronicConditions = [
    'Diabetes', 'Hypertension', 'Thyroid disorders', 'Arthritis',
    'Asthma', 'Heart disease', 'Autoimmune conditions', 'Digestive disorders'
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-8rem)] my-8 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto p-4 md:p-6 bg-green-50 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-6">
            Ayurvedic Health Assessment
          </h1>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow">
            {/* Progress indicator */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4, 5].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center 
                      ${step >= stepNumber ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    {stepNumber}
                  </div>
                ))}
              </div>
              <div className="text-xs md:text-sm text-gray-600 text-center">
                {step === 1 && 'Basic Information'}
                {step === 2 && 'Physical Characteristics'}
                {step === 3 && 'Health Concerns'}
                {step === 4 && 'Lifestyle'}
                {step === 5 && 'Dosha Assessment'}
              </div>
            </div>

            <form onSubmit={submitForm}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-lg md:text-xl font-semibold text-green-700">Basic Information</h2>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.basicInfo.name}
                      onChange={(e) => handleChange(e, 'basicInfo')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      name="age"
                      min="1"
                      max="120"
                      value={formData.basicInfo.age}
                      onChange={(e) => handleChange(e, 'basicInfo')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      value={formData.basicInfo.gender}
                      onChange={(e) => handleChange(e, 'basicInfo')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Physical Characteristics */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-lg md:text-xl font-semibold text-green-700">Physical Characteristics</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        min="100"
                        max="250"
                        value={formData.physicalCharacteristics.height}
                        onChange={(e) => handleChange(e, 'physicalCharacteristics')}
                        className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        min="20"
                        max="200"
                        value={formData.physicalCharacteristics.weight}
                        onChange={(e) => handleChange(e, 'physicalCharacteristics')}
                        className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Body Type</label>
                    <select
                      name="bodyType"
                      value={formData.physicalCharacteristics.bodyType}
                      onChange={(e) => handleChange(e, 'physicalCharacteristics')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select</option>
                      <option value="ectomorph">Ectomorph (Lean and long)</option>
                      <option value="mesomorph">Mesomorph (Muscular and well-built)</option>
                      <option value="endomorph">Endomorph (Soft and round)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Skin Type</label>
                    <select
                      name="skinType"
                      value={formData.physicalCharacteristics.skinType}
                      onChange={(e) => handleChange(e, 'physicalCharacteristics')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select</option>
                      <option value="dry">Dry</option>
                      <option value="oily">Oily</option>
                      <option value="combination">Combination</option>
                      <option value="normal">Normal</option>
                      <option value="sensitive">Sensitive</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Health Concerns */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-lg md:text-xl font-semibold text-green-700">Health Concerns</h2>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Primary Health Concern</label>
                    <input
                      type="text"
                      name="primaryConcern"
                      value={formData.healthConcerns.primaryConcern}
                      onChange={(e) => handleChange(e, 'healthConcerns')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                      placeholder="What is your main health concern?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Secondary Health Concerns</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {commonConcerns.map(concern => (
                        <div key={concern} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`concern-${concern}`}
                            name="secondaryConcerns"
                            value={concern}
                            checked={formData.healthConcerns.secondaryConcerns.includes(concern)}
                            onChange={(e) => handleChange(e, 'healthConcerns')}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`concern-${concern}`} className="ml-2 text-gray-700">
                            {concern}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Chronic Conditions</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {chronicConditions.map(condition => (
                        <div key={condition} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`condition-${condition}`}
                            name="chronicConditions"
                            value={condition}
                            checked={formData.healthConcerns.chronicConditions.includes(condition)}
                            onChange={(e) => handleChange(e, 'healthConcerns')}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`condition-${condition}`} className="ml-2 text-gray-700">
                            {condition}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Lifestyle */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-lg md:text-xl font-semibold text-green-700">Lifestyle</h2>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Diet Type</label>
                    <select
                      name="diet"
                      value={formData.lifestyle.diet}
                      onChange={(e) => handleChange(e, 'lifestyle')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="non-vegetarian">Non-vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="pescatarian">Pescatarian</option>
                      <option value="flexitarian">Flexitarian</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Sleep Pattern</label>
                    <select
                      name="sleepPattern"
                      value={formData.lifestyle.sleepPattern}
                      onChange={(e) => handleChange(e, 'lifestyle')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select</option>
                      <option value="regular">Regular (7-8 hours at night)</option>
                      <option value="irregular">Irregular</option>
                      <option value="insomnia">Difficulty sleeping</option>
                      <option value="excessive">Excessive sleep</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Exercise Frequency</label>
                    <select
                      name="exerciseFrequency"
                      value={formData.lifestyle.exerciseFrequency}
                      onChange={(e) => handleChange(e, 'lifestyle')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select</option>
                      <option value="daily">Daily</option>
                      <option value="3-4-times-week">3-4 times a week</option>
                      <option value="1-2-times-week">1-2 times a week</option>
                      <option value="rarely">Rarely</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Stress Level</label>
                    <select
                      name="stressLevel"
                      value={formData.lifestyle.stressLevel}
                      onChange={(e) => handleChange(e, 'lifestyle')}
                      className="w-full p-2 border rounded focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select</option>
                      <option value="low">Low</option>
                      <option value="moderate">Moderate</option>
                      <option value="high">High</option>
                      <option value="very-high">Very High</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 5: Dosha Assessment */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="text-lg md:text-xl font-semibold text-green-700">Dosha Assessment</h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Please rate how strongly you identify with each dosha (1-10 scale)
                  </p>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Vata (Air/Ether)</label>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">
                      Characteristics: Creative, energetic, thin build, dry skin, cold hands/feet, 
                      irregular digestion, light sleeper
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.doshaAssessment.vata}
                      onChange={(e) => handleDoshaSelection('vata', parseInt(e.target.value))}
                      className="w-full accent-green-700"
                    />
                    <div className="flex justify-between text-xs md:text-sm text-gray-600">
                      <span>1 (Not at all)</span>
                      <span>10 (Very strongly)</span>
                    </div>
                    <div className="text-center mt-1 font-medium text-green-700">
                      {formData.doshaAssessment.vata}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Pitta (Fire/Water)</label>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">
                      Characteristics: Intelligent, focused, medium build, warm body temperature, 
                      strong digestion, prone to inflammation, goal-oriented
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.doshaAssessment.pitta}
                      onChange={(e) => handleDoshaSelection('pitta', parseInt(e.target.value))}
                      className="w-full accent-green-700"
                    />
                    <div className="flex justify-between text-xs md:text-sm text-gray-600">
                      <span>1 (Not at all)</span>
                      <span>10 (Very strongly)</span>
                    </div>
                    <div className="text-center mt-1 font-medium text-green-700">
                      {formData.doshaAssessment.pitta}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Kapha (Earth/Water)</label>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">
                      Characteristics: Calm, loving, sturdy build, smooth/oily skin, 
                      slow digestion, deep sleeper, resistant to change
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.doshaAssessment.kapha}
                      onChange={(e) => handleDoshaSelection('kapha', parseInt(e.target.value))}
                      className="w-full accent-green-700"
                    />
                    <div className="flex justify-between text-xs md:text-sm text-gray-600">
                      <span>1 (Not at all)</span>
                      <span>10 (Very strongly)</span>
                    </div>
                    <div className="text-center mt-1 font-medium text-green-700">
                      {formData.doshaAssessment.kapha}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-6 md:mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-3 py-1 md:px-4 md:py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Back
                  </button>
                )}
                
                {step < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-3 py-1 md:px-4 md:py-2 bg-green-800 text-white rounded hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700"
                  >
                    Submit & Consult Ayurvedic Bot
                  </button>
                )}
              </div>
            </form>
          </div>
          
          <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-600">
            <p>Your information will be used solely to provide personalized Ayurvedic recommendations.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthCheckup;