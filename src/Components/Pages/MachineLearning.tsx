function MachineLearning() {
  return (
    <div className="w-full pb-10 bg-zinc-950 pt-10 px-5 text-white ">
      <div className="text-center mt-10 ">
        <h1 className="text-4xl text-green-500 font-bold ">Machine Learning</h1>
        <h2 className="text-zinc-500">
          Everything you need to know to get started
        </h2>
      </div>
      <div className="content">
        <div className="mt-5">
          <h1 className="font-bold text-3xl mb-2">Topics</h1>
        </div>
        <div className="ml-5">
          <div className="text-xl font-bold">
            Step 1- Foundations Mathematics:
          </div>
          <div className="ml-5">
            Linear Algebra, Calculus, Probability & Statistics
            <br />
            <span>Programming:</span> <br /> Python (preferred for ML) <br />
            Libraries: NumPy, Pandas
          </div>
          <br />
          <div className="text-xl font-bold">Step 2- Basic ML Concepts</div>
          <div className="ml-5">
            Introduction to ML: Understand what ML is and its types{" "}
            <em>(supervised, unsupervised, reinforcement learning)</em>. <br />
            Data Analysis (EDA): Data visualization Data preprocessing <br />
            Supervised Learning: Regression Classification Evaluation Metrics{" "}
            <br />
            Unsupervised Learning: Clustering Dimensionality Reduction
          </div>
          <br />
          <div className="text-xl font-bold">Step 3- Advanced ML Concepts</div>
          <div className="ml-5">
            Deep Learning: Neural Networks CNNs, RNNs <br />
            Frameworks: TensorFlow, PyTorch <br />
            Model Evaluation and Validation: Cross-validation Hyperparameter
            tuning <br />
            Deployment: Basics of deploying ML models <br />
            Special Topics: Natural Language Processing (NLP), Computer Vision,
            Reinforcement Learning
          </div>
          <br />
          <div className="text-xl font-bold">Step 4- Projects and Practice</div>
          <div className="ml-5">
            Kaggle Competitions: Participate in competitions for practical
            experience. <br />
            Personal Projects: Work on your own ML projects. <br />
            Open Source Contributions: Contribute to ML-related open-source
            projects.
          </div>
          <br />
          <div className="text-xl font-bold">
            Step 5- Continuous Learning and Specialization
          </div>
          <div className="ml-5">
            Stay Updated: Follow research papers, blogs, and conferences. <br />
            Specialize: Choose a specific area of ML to delve deeper into (e.g.,
            computer vision, NLP).
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineLearning;
