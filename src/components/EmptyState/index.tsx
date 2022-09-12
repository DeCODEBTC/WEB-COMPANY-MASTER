import React from "react";

export interface EmptyStateProps {
  title: string;
  subtitle: string;
  iconName?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  subtitle,
  iconName = "icon-people",
}) => {
  return (
    <div className="empty">
      <div className="empty-icon">
        <i className={`icon icon-3x ${iconName}`}></i>
      </div>
      <p className="empty-title h5">{title}</p>
      <p className="empty-subtitle">{subtitle}</p>
    </div>
  );
};

export default EmptyState;
