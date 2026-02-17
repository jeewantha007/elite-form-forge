interface StatusBadgeProps {
  status: "active" | "expiring" | "expired" | "paid" | "pending" | "overdue";
}

const config: Record<string, { label: string; className: string }> = {
  active: { label: "Active", className: "bg-status-active/20 text-status-active" },
  expiring: { label: "Expiring Soon", className: "bg-status-expiring/20 text-status-expiring" },
  expired: { label: "Expired", className: "bg-status-overdue/20 text-status-overdue" },
  paid: { label: "Paid", className: "bg-status-active/20 text-status-active" },
  pending: { label: "Pending", className: "bg-status-expiring/20 text-status-expiring" },
  overdue: { label: "Overdue", className: "bg-status-overdue/20 text-status-overdue" },
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const c = config[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${c.className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />
      {c.label}
    </span>
  );
};

export default StatusBadge;
