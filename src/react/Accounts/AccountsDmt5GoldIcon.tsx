import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDmt5GoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#0364B9' d='M26 0H6a6 6 0 0 0-6 6v17.5h32V6a6 6 0 0 0-6-6' />
    <path
      fill='#0A559E'
      d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM32 6c0-1.504-.553-2.88-1.468-3.933L26.602 23.5H32z'
    />
    <path fill='#DAAF0A' d='M0 23h32v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z' />
    <path
      fill='#fff'
      d='M7.342 9.684q.216.396.492.984.288.576.588 1.26.312.672.612 1.38l.564 1.332.564-1.332q.3-.708.6-1.38.312-.684.588-1.26.288-.588.504-.984h1.704q.12.828.216 1.86.108 1.02.18 2.136.084 1.104.144 2.22.072 1.116.12 2.1h-1.824q-.036-1.212-.096-2.64t-.18-2.88a518 518 0 0 1-1.008 2.34 109 109 0 0 1-.9 2.124H8.902q-.168-.396-.408-.948-.24-.564-.504-1.176-.252-.612-.516-1.224l-.48-1.116q-.12 1.452-.18 2.88T6.718 18H4.894q.048-.984.108-2.1l.144-2.22q.084-1.116.18-2.136.108-1.032.228-1.86zM21.355 9.684v1.596h-2.508V18h-1.872v-6.72h-2.508V9.684zM25.318 15.552a1.2 1.2 0 0 0-.156-.612q-.156-.276-.54-.456t-1.032-.276a11.5 11.5 0 0 0-1.632-.096q.132-1.116.216-2.268t.132-2.16h4.5v1.5h-3q-.024.432-.06.84-.024.396-.06.696 1.752.12 2.58.828.84.696.84 1.944 0 .576-.204 1.068t-.612.852a2.9 2.9 0 0 1-1.032.564q-.612.204-1.44.204-.324 0-.684-.048a6 6 0 0 1-.684-.108 7 7 0 0 1-.588-.132 2.3 2.3 0 0 1-.408-.144l.324-1.476q.3.132.792.264.492.12 1.176.12.828 0 1.2-.324.372-.336.372-.78M10.13 26.148q-.655 0-.949.366-.288.36-.288.99 0 .306.072.558.072.246.216.426t.36.282q.216.096.504.096.156 0 .264-.006.114-.006.198-.024V27.39h.936v2.058a4.565 4.565 0 0 1-1.458.216 2.4 2.4 0 0 1-.852-.144 1.8 1.8 0 0 1-.648-.42q-.27-.276-.42-.678a2.7 2.7 0 0 1-.144-.918q0-.522.162-.924t.444-.678q.282-.282.66-.426.384-.144.816-.144.294 0 .528.042.24.036.408.09.174.048.282.102.114.054.162.084l-.27.75a2.3 2.3 0 0 0-.444-.174 1.8 1.8 0 0 0-.54-.078M13.1 27.504q0 .306.072.552.078.246.216.426a1 1 0 0 0 .348.27q.204.096.468.096.258 0 .462-.096a.9.9 0 0 0 .348-.27q.144-.18.216-.426.078-.246.078-.552t-.078-.552a1.2 1.2 0 0 0-.216-.426.9.9 0 0 0-.348-.276 1.1 1.1 0 0 0-.462-.096 1.03 1.03 0 0 0-.816.378 1.3 1.3 0 0 0-.216.426 2 2 0 0 0-.072.546m3.174 0q0 .534-.162.942a1.9 1.9 0 0 1-.432.678q-.276.27-.66.408a2.4 2.4 0 0 1-.816.138q-.426 0-.804-.138a1.9 1.9 0 0 1-.66-.408 2 2 0 0 1-.444-.678 2.5 2.5 0 0 1-.162-.942q0-.534.168-.936.168-.408.45-.684.288-.276.66-.414.378-.138.792-.138.426 0 .804.138t.66.414.444.684q.162.402.162.936M19.832 28.782v.804h-2.778v-4.158h.936v3.354zM21.371 28.824l.15.012h.21q.702 0 1.038-.354.342-.354.342-.978 0-.654-.324-.99t-1.026-.336q-.096 0-.198.006-.102 0-.192.012zm2.706-1.32q0 .54-.168.942a1.7 1.7 0 0 1-.48.666 2 2 0 0 1-.75.396 3.5 3.5 0 0 1-.996.132q-.252 0-.588-.024a4.5 4.5 0 0 1-.66-.084v-4.05q.324-.06.672-.078.354-.024.606-.024.534 0 .966.12.438.12.75.378t.48.66.168.966'
    />
  </svg>
);
const ForwardRef = forwardRef(AccountsDmt5GoldIcon);
export default ForwardRef;
