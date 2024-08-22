import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDmt5StandardIcon = (
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
    <g clipPath='url(#dc32a8232a5367d53cfc43b0ee023957__a)'>
      <path fill='#0364B9' d='M26 0H6a6 6 0 0 0-6 6v17.5h32V6a6 6 0 0 0-6-6' />
      <path
        fill='#0A559E'
        d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM32 6c0-1.504-.553-2.88-1.468-3.933L26.602 23.5H32z'
      />
      <path fill='#2A3052' d='M0 23h32v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z' />
      <path
        fill='#fff'
        d='M7.346 9.684q.216.396.492.984.288.576.588 1.26.312.672.612 1.38l.564 1.332.564-1.332q.3-.708.6-1.38.312-.684.588-1.26.288-.588.504-.984h1.704q.12.828.216 1.86.108 1.02.18 2.136.084 1.104.144 2.22.072 1.116.12 2.1h-1.824q-.036-1.212-.096-2.64t-.18-2.88a518 518 0 0 1-1.008 2.34 109 109 0 0 1-.9 2.124H8.906q-.168-.396-.408-.948-.24-.564-.504-1.176-.252-.612-.516-1.224l-.48-1.116q-.12 1.452-.18 2.88T6.722 18H4.898q.048-.984.108-2.1l.144-2.22q.084-1.116.18-2.136.108-1.032.228-1.86zM21.359 9.684v1.596H18.85V18h-1.872v-6.72H14.47V9.684zM25.322 15.552a1.2 1.2 0 0 0-.156-.612q-.156-.276-.54-.456t-1.032-.276a11.5 11.5 0 0 0-1.632-.096q.132-1.116.216-2.268t.132-2.16h4.5v1.5h-3q-.024.432-.06.84-.024.396-.06.696 1.752.12 2.58.828.84.696.84 1.944 0 .576-.204 1.068t-.612.852a2.9 2.9 0 0 1-1.032.564q-.612.204-1.44.204-.324 0-.684-.048a6 6 0 0 1-.684-.108 7 7 0 0 1-.588-.132 2.3 2.3 0 0 1-.408-.144l.324-1.476q.3.132.792.264.492.12 1.176.12.828 0 1.2-.324.372-.336.372-.78M11.872 28.872q.198 0 .324-.03a.7.7 0 0 0 .21-.09.3.3 0 0 0 .108-.138q.03-.078.03-.174 0-.204-.192-.336-.192-.138-.66-.294a6 6 0 0 1-.408-.162 1.6 1.6 0 0 1-.366-.234 1.2 1.2 0 0 1-.264-.342 1.1 1.1 0 0 1-.102-.492q0-.288.108-.516.108-.234.306-.396t.48-.246q.282-.09.636-.09a2.6 2.6 0 0 1 1.23.288l-.27.738a2.3 2.3 0 0 0-.39-.156 1.6 1.6 0 0 0-.51-.072q-.336 0-.486.096-.144.09-.144.282 0 .114.054.192t.15.144q.102.06.228.114l.288.102q.324.12.564.24.24.114.396.27a1 1 0 0 1 .24.366q.078.21.078.51 0 .582-.408.906-.408.318-1.23.318-.276 0-.498-.036a2.485 2.485 0 0 1-.69-.18 2 2 0 0 1-.204-.102l.264-.744q.186.102.456.186a2.5 2.5 0 0 0 .672.078M17.197 25.428v.798h-1.254v3.36h-.936v-3.36h-1.254v-.798zM18.734 28.824l.15.012h.21q.702 0 1.038-.354.342-.354.342-.978 0-.654-.324-.99t-1.026-.336q-.096 0-.198.006-.102 0-.192.012zm2.706-1.32q0 .54-.168.942a1.7 1.7 0 0 1-.48.666 2 2 0 0 1-.75.396 3.5 3.5 0 0 1-.996.132q-.252 0-.588-.024a4.5 4.5 0 0 1-.66-.084v-4.05q.324-.06.672-.078.354-.024.606-.024.534 0 .966.12.438.12.75.378t.48.66.168.966'
      />
    </g>
    <defs>
      <clipPath id='dc32a8232a5367d53cfc43b0ee023957__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(AccountsDmt5StandardIcon);
export default ForwardRef;
