import Image from "next/image";

const EmployeeCard = ({ image, name, position, email, phone }) => {
  return (
    <article className="px-5.5">
      {image ? (
        <Image
          src={image}
          alt={name || "Employee"}
          width={400}
          height={600}
          className="aspect-57/68 h-auto w-full object-cover"
        />
      ) : (
        <div
          className="aspect-57/68 h-auto w-full bg-gray-300"
          aria-label="No employee image"
        />
      )}
      <p>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </article>
  );
};

export default EmployeeCard;
