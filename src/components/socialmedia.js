import React from "react";
import { useNavigate } from "react-router-dom";
function Socialmedia({ buttonText, undertext, gray, handleClick, buttonText2 }) {
  const navigate = useNavigate();
  return (
    <>
      <svg
        class="mt-7 ml-7"
        width="320"
        height="9"
        viewBox="0 0 349 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M175.432 4.728C175.432 5.22933 175.333 5.65867 175.136 6.016C174.944 6.37333 174.656 6.648 174.272 6.84C173.893 7.02667 173.424 7.12 172.864 7.12C172.304 7.12 171.832 7.02667 171.448 6.84C171.069 6.648 170.781 6.37333 170.584 6.016C170.392 5.65867 170.296 5.22933 170.296 4.728C170.296 4.34933 170.349 4.01333 170.456 3.72C170.568 3.42133 170.731 3.17067 170.944 2.968C171.163 2.76 171.432 2.60267 171.752 2.496C172.072 2.38933 172.443 2.336 172.864 2.336C173.285 2.336 173.656 2.38933 173.976 2.496C174.296 2.60267 174.563 2.76 174.776 2.968C174.995 3.17067 175.157 3.42133 175.264 3.72C175.376 4.01333 175.432 4.34933 175.432 4.728ZM172.112 4.728C172.112 5.13333 172.131 5.45067 172.168 5.68C172.211 5.90933 172.285 6.072 172.392 6.168C172.504 6.25867 172.661 6.304 172.864 6.304C173.072 6.304 173.229 6.25867 173.336 6.168C173.443 6.072 173.515 5.90933 173.552 5.68C173.595 5.45067 173.616 5.13333 173.616 4.728C173.616 4.32267 173.595 4.00533 173.552 3.776C173.515 3.54667 173.443 3.38667 173.336 3.296C173.229 3.2 173.072 3.152 172.864 3.152C172.661 3.152 172.504 3.2 172.392 3.296C172.285 3.38667 172.211 3.54667 172.168 3.776C172.131 4.00533 172.112 4.32267 172.112 4.728ZM179.951 2.392V4.016C179.908 4.01067 179.828 4.008 179.711 4.008C179.593 4.00267 179.465 3.99733 179.327 3.992C179.188 3.98667 179.06 3.984 178.943 3.984C178.857 3.984 178.775 3.984 178.695 3.984C178.615 3.984 178.537 3.98667 178.463 3.992C178.393 3.99733 178.327 4.00267 178.263 4.008C178.204 4.008 178.145 4.01333 178.087 4.024L178.007 3.96C178.188 3.592 178.348 3.288 178.487 3.048C178.625 2.808 178.777 2.62933 178.943 2.512C179.113 2.38933 179.327 2.328 179.583 2.328C179.679 2.328 179.759 2.336 179.823 2.352C179.887 2.368 179.929 2.38133 179.951 2.392ZM176.047 7V6.352H176.071C176.193 6.352 176.284 6.31467 176.343 6.24C176.407 6.16533 176.439 6.02667 176.439 5.824V3.432C176.439 3.38933 176.425 3.35733 176.399 3.336C176.377 3.30933 176.343 3.288 176.295 3.272C176.247 3.256 176.185 3.24 176.111 3.224L176.047 3.208V2.432H177.967L178.207 3.784L178.215 3.88V6.288C178.215 6.304 178.236 6.31733 178.279 6.328C178.321 6.33867 178.383 6.34667 178.463 6.352C178.548 6.352 178.647 6.352 178.759 6.352H178.799V7H176.047Z"
          fill="#2B616D"
        />
        <path
          d="M1 5H161"
          stroke="#2B616D"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M188 5H348"
          stroke="#2B616D"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <div class="flex justify-center items-center mt-4 gap-2 cursor-pointer">
        {/* GOOGLE */}
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="32"
            height="32"
            rx="9"
            fill="#B2DBD5"
            fill-opacity="0.3"
            stroke="#B2DBD5"
            stroke-width="2"
          />
          <path
            d="M22.9633 16.442C22.9327 16.136 22.6694 15.908 22.3571 15.908H17.7347C17.398 15.908 17.1224 16.178 17.1224 16.508V17.534C17.1224 17.864 17.398 18.134 17.7347 18.134H20.4959C20.4286 18.686 20.0612 19.52 19.2469 20.078C18.7265 20.432 18.0347 20.678 17.1224 20.678C17.0796 20.678 17.0429 20.678 17 20.672C15.4388 20.624 14.1163 19.598 13.6388 18.188C13.5102 17.81 13.4367 17.414 13.4367 17C13.4367 16.586 13.5102 16.184 13.6327 15.812C13.6694 15.704 13.7122 15.596 13.7612 15.488C14.3245 14.246 15.5551 13.37 17 13.328C17.0367 13.322 17.0796 13.322 17.1224 13.322C17.998 13.322 18.6531 13.604 19.1122 13.916C19.351 14.078 19.6694 14.042 19.8775 13.844L20.7286 13.028C20.998 12.77 20.9735 12.332 20.6673 12.116C19.6939 11.414 18.5061 11 17.1224 11C17.0796 11 17.0429 11 17 11.006C14.6551 11.048 12.6408 12.38 11.6551 14.306C11.2388 15.122 11 16.034 11 17C11 17.966 11.2388 18.878 11.6551 19.694H11.6612C12.6469 21.62 14.6612 22.952 17 22.994C17.0429 23 17.0796 23 17.1224 23C18.7755 23 20.1653 22.466 21.1755 21.548C22.3327 20.498 23 18.962 23 17.132C23 16.874 22.9878 16.652 22.9633 16.442Z"
            fill="#2B616D"
          />
        </svg>

        {/* face */}
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="32"
            height="32"
            rx="9"
            fill="#B2DBD5"
            fill-opacity="0.3"
            stroke="#B2DBD5"
            stroke-width="2"
          />
          <path
            d="M23 19.514C23 21.698 21.698 23 19.514 23H18.8C18.47 23 18.2 22.73 18.2 22.4V18.938C18.2 18.776 18.332 18.638 18.494 18.638L19.55 18.62C19.634 18.614 19.706 18.554 19.724 18.47L19.934 17.324C19.952 17.216 19.868 17.114 19.754 17.114L18.476 17.132C18.308 17.132 18.176 17 18.17 16.838L18.146 15.368C18.146 15.272 18.224 15.188 18.326 15.188L19.766 15.164C19.868 15.164 19.946 15.086 19.946 14.984L19.922 13.544C19.922 13.442 19.844 13.364 19.742 13.364L18.122 13.388C17.126 13.406 16.334 14.222 16.352 15.218L16.382 16.868C16.388 17.036 16.256 17.168 16.088 17.174L15.368 17.186C15.266 17.186 15.188 17.264 15.188 17.366L15.206 18.506C15.206 18.608 15.284 18.686 15.386 18.686L16.106 18.674C16.274 18.674 16.406 18.806 16.412 18.968L16.466 22.388C16.472 22.724 16.202 23 15.866 23H14.486C12.302 23 11 21.698 11 19.508V14.486C11 12.302 12.302 11 14.486 11H19.514C21.698 11 23 12.302 23 14.486V19.514Z"
            fill="#2B616D"
          />
        </svg>

        {/* INSTA */}
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="32"
            height="32"
            rx="9"
            fill="#B2DBD5"
            fill-opacity="0.3"
            stroke="#B2DBD5"
            stroke-width="2"
          />
          <path
            d="M20.2171 10H14.7739C12.4095 10 11 11.4095 11 13.7739V19.2106C11 21.5815 12.4095 22.991 14.7739 22.991H20.2106C22.575 22.991 23.9845 21.5815 23.9845 19.2171V13.7739C23.991 11.4095 22.5815 10 20.2171 10ZM17.4955 19.0158C16.1055 19.0158 14.9753 17.8856 14.9753 16.4955C14.9753 15.1055 16.1055 13.9753 17.4955 13.9753C18.8856 13.9753 20.0158 15.1055 20.0158 16.4955C20.0158 17.8856 18.8856 19.0158 17.4955 19.0158ZM21.3409 13.1698C21.3084 13.2478 21.2629 13.3192 21.2045 13.3842C21.1395 13.4426 21.068 13.4881 20.9901 13.5206C20.9122 13.553 20.8277 13.5725 20.7433 13.5725C20.5679 13.5725 20.4055 13.5076 20.2821 13.3842C20.2236 13.3192 20.1782 13.2478 20.1457 13.1698C20.1132 13.0919 20.0937 13.0074 20.0937 12.923C20.0937 12.8385 20.1132 12.7541 20.1457 12.6762C20.1782 12.5917 20.2236 12.5268 20.2821 12.4618C20.4315 12.3124 20.6588 12.241 20.8667 12.2864C20.9122 12.2929 20.9511 12.3059 20.9901 12.3254C21.0291 12.3384 21.0681 12.3579 21.107 12.3839C21.1395 12.4033 21.172 12.4358 21.2045 12.4618C21.2629 12.5268 21.3084 12.5917 21.3409 12.6762C21.3733 12.7541 21.3928 12.8385 21.3928 12.923C21.3928 13.0074 21.3733 13.0919 21.3409 13.1698Z"
            fill="#2B616D"
          />
        </svg>
      </div>
      <div class="flex justify-center items-center">
        <button
          onClick={handleClick} 
          class="hover:bg-customBlue transition duration-150 ease-out hover:ease-in bg-orange h-10 text-white rounded-full drop-shadow-lg font-serif w-72 mt-4 text-center font-semibold text-sm"
        >
          {buttonText}
        </button>
      </div>
      <div class="font-serif mt-4  mb-4 font-normal text-sm flex justify-center items-center">
        <label class="text-gris">{gray} </label>
        <button
          onClick={() => navigate(buttonText2)}
          class=" cursor-pointer text-orange font-serif hover-underline "
        >
          {undertext}
        </button>
      </div>
    </>
  );
}

export default Socialmedia;
