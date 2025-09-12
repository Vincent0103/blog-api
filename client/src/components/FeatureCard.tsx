type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="mb-3 text-emerald-600">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
