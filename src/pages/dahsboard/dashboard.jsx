import { contact, edit, ID, mail, office, phone } from "../../assets";
import profile_picture from "../../assets/profile.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend);

import contact_blue from "./icons/Contact_blue.svg";
import bag_blue from "./icons/bag_blue.svg";
import file_blue from "./icons/File_blue.svg";
import bank_blue from "./icons/Bank_blue.svg";
import { useEffect, useState } from "react";

/** ===================== STATIC DATA ==================================== */

const cardContact = [
  {
    name: "Contact",
    amount: 51,
    icon: contact_blue,
  },
  {
    name: "Loan",
    amount: 56,
    icon: file_blue,
  },
  {
    name: "product",
    amount: 80,
    icon: bag_blue,
  },
  {
    name: "bank",
    amount: 30,
    icon: bank_blue,
  },
];

const notificationInfo = [
  {
    time: "2 hrs",
    title: "admin_branch has updated",
    desc: "Harry Handoko - Contact|MYCRM",
  },
  {
    time: "2 hrs",
    title: "admin_branch has updated",
    desc: "Harry Handoko - Application|MYCRM",
  },
  {
    time: "4 hrs",
    title: "admin_branch has updated",
    desc: "Harry Handoko - Application|MYCRM",
  },
  {
    time: "4 hrs",
    title: "admin_branch has updated",
    desc: "Harry Handoko - Contact|MYCRM",
  },
];

const mainColor = "#17A9E2";

const Dashboard = () => {
  const CardInfo = ({ icon, name, amount }) => (
    <>
      <div className="flex items-center w-full gap-2 p-1 bg-white rounded-lg xl:p-4 xl:w-full">
        <div className="bg-[#E2F0FF] size-[30px] xl:size-[70px] rounded-full flex-none grid place-items-center">
          <img src={icon} alt={name} className="size-5 xl:size-12" />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-0 text-center xl:gap-2">
          <h5 className="text-xs uppercase font-smibold xl:text-2xl">{name}</h5>
          <p className="text-[#17A9E2] font-bold text-base xl:text-4xl">{amount}</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="">
        <ProfileCard />
      </div>
      <div className="grid grid-cols-3 gap-2 p-3 xl:gap-8 xl:p-10">
        <div className="grid grid-cols-2 col-span-3 gap-2 xl:gap-5 xl:grid-cols-4 xl:col-span-2">
          {cardContact.map((info) => (
            <CardInfo
              key={info.name}
              icon={info.icon}
              name={info.name}
              amount={info.amount}
            />
          ))}
        </div>
        <div className="col-span-3 xl:col-span-1 xl:row-span-5">
          <Notification />
        </div>
        <div className="relative flex flex-col items-center col-span-3 gap-2 py-3 bg-white rounded-lg shadow-lg xl:justify-around xl:flex-row xl:col-span-2 xl:py-7">
          <ProgressChart
            amount={40}
            subtitle="2/5 Pinjaman telah disetujui"
            title="PINJAMAN DISETUJUI"
          />
          <div className="border-r border-black"></div>
          <ProgressChart
            amount={280}
            subtitle="Rp14.000.000.000,00 / Rp5.000.000.000"
            title="target"
          />
          <button
            type="button"
            className="absolute top-5 right-5 border-2 border-[#37B5E7] rounded-md p-1"
          >
            <img src={edit} alt="edit" className="xl:size-full size-5" />
          </button>
        </div>
        <div className="col-span-3 xl:col-span-2">
          <PieChart />
        </div>
      </div>
    </>
  );
};

const PieChart = () => {
  const data = {
    labels: ["BRI", "KEB Hana Bank", "Mandiri", "BTN", "Artha Graha"],
    datasets: [
      {
        label: "Approval Percentage",
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "#10b981",
          "#3b82f6",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
        },
      },
    },
  };

  return (
    <>
      <div className="py-3 bg-white rounded-lg shadow-lg">
        <div style={{ maxWidth: "500px", margin: "auto" }}>
          <h2 className="py-2 space-y-5 text-3xl font-semibold text-center">
            Top 5 Bank Approval Tertinggi
          </h2>
          <Pie data={data} options={options} />
        </div>
      </div>
    </>
  );
};

const Notification = () => {
  const InfoBar = ({ info, index }) => (
    <>
      <div className="flex justify-between">
        <div className="flex-none w-10 xl:w-12 text-[#646567] font-medium text-sm xl:text-lg">
          {info?.time}
        </div>
        <div className="relative flex flex-col items-center flex-none w-7 xl:w-12">
          <span
            className="block size-3 xl:size-5 rounded-full bg-[#17A9E2] absolute"
            style={{ background: index % 2 == 0 ? "#17A9E2" : "#646567" }}
          ></span>
          <span className="block h-full w-1 xl:w-1.5 bg-[#6465674D] "></span>
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-base font-semibold xl:text-lg">{info?.title}</p>
          <p className="text-sm xl:text-base">{info?.desc}</p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="px-8 bg-white rounded-lg shadow-lg py-7 min-h-96">
        <h3 className="text-lg font-semibold uppercase xl:text-3xl">Notification</h3>
        <div className="my-2 xl:my-4">
          {notificationInfo.map((info, index) => (
            <InfoBar key={index} index={index} info={info} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProgressChart = ({ amount = 100, title = "", subtitle = "" }) => {
  const [progres, setProgres] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgres((prev) => {
        if (prev < amount) {
          return prev + 4;
        }
        return prev;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center size-full">
      <div className="grid space-y-5 text-center place-items-center">
        <h3 className="text-lg font-semibold uppercase xl:text-3xl">{title}</h3>
        <CircularProgressbar
          className="text-center xl:size-72 size-40 "
          value={progres}
          text={`${progres}%`}
          styles={buildStyles({
            pathColor: "#17A9E2",
            textColor: "#111827",
            trailColor: "#e5e7eb",
          })}
        />
        <p className="text-lg font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

const ProfileCard = () => {
  const ContactInfo = ({ text, icon }) => (
    <>
      <div className="flex items-center gap-2 text-xs xl:text-base">
        <div className="bg-[#E2F0FF] shadow-md rounded-full p-1">
          <img src={icon} alt={text} className="block size-9" />
        </div>
        <p>{text}</p>
      </div>
    </>
  );

  return (
    <>
      <div className="flex bg-white min-w-fit">
        <div className="flex-none h-full p-2 xl:p-10 ">
          <div className="">
            <img
              src={profile_picture}
              alt="profile"
              className="w-2/5 xl:w-full"
            />
          </div>
        </div>
        <div className="p-2 space-y-4 xl:p-8">
          <div>
            <p className="text-[#17A9E2] text-base md:text-lg xl:text-4xl uppercase font-semibold">
              Yohannes affandy (jojo)
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 xl:gap-5 place-items-center">
            <div className="md:hidden">
              <ContactInfo icon={office} text="Loan Market Office Dev" />
              <ContactInfo icon={ID} text="LM9990001" />
              <ContactInfo icon={mail} text="it@loanmarket.co.id" />
              <ContactInfo icon={phone} text="6281234567890" />
            </div>
            <div className="hidden px-1 space-y-2 xl:px-3 xl:space-y-4 md:block">
              <ContactInfo icon={office} text="Loan Market Office Dev" />
              <ContactInfo icon={ID} text="LM9990001" />
            </div>
            <div className="hidden px-8 space-y-4 border-l border-black md:block">
              <ContactInfo icon={mail} text="it@loanmarket.co.id" />
              <ContactInfo icon={phone} text="6281234567890" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
