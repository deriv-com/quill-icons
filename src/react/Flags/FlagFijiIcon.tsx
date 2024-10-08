import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagFijiIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#62B5E5'
      fillRule='evenodd'
      d='M22 0H12v8H0v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-3.4 8.938v.004H21V10a.3.3 0 0 1-.016.068l-.01.028h-.002c-.165.422-1.057 1.86-2.372 2.218v.005a2.3 2.3 0 0 1-1.2 0v-.004c-1.316-.358-2.208-1.796-2.373-2.219h-.001A.3.3 0 0 1 15 10V8.942h2.4v-.005H15V4h6v4.938z'
      clipRule='evenodd'
    />
    <path fill='#042C90' d='M0 8h12V0H2a2 2 0 0 0-2 2z' />
    <path
      fill='#fff'
      d='M5 0v2.131L1.815.008C1.042.08.396.59.13 1.288L2.697 3H0v2h2.697L0 6.798V8h1.803L5 5.869V8h2V5.869L10.197 8H12V6.798L9.303 5H12V3H9.303L12 1.202V0h-1.803L7 2.131V0z'
    />
    <path fill='#F44336' d='M5.5 0v3.5H0v1h5.5V8h1V4.5H12v-1H6.5V0z' />
    <path
      fill='#F44336'
      d='m11.55 0-4.5 3h.9L12 .3V0zM0 8h.45l4.5-3h-.9L0 7.7zM.524.65 4.05 3h.902L.923.315A2 2 0 0 0 .524.65M7.95 5 12 7.7V8h-.45l-4.5-3z'
    />
    <path fill='red' fillRule='evenodd' d='M19.8 5.199h-3.6v1.2h3.6z' clipRule='evenodd' />
    <path
      fill='#fff'
      d='M21 7.596v1.342h-2.4V7.595zM15 7.596h2.4v1.342H15zM15.026 10.092l.001.004c.165.423 1.057 1.86 2.373 2.219v-2.223zM18.6 12.314c1.315-.358 2.207-1.796 2.372-2.218l.002-.004H18.6z'
    />
    <path fill='#FFD200' fillRule='evenodd' d='M16.2 5.195h3.6v1.2h-3.6z' clipRule='evenodd' />
    <path
      fill='red'
      fillRule='evenodd'
      d='M18.6 8.942V7.596H21V4h-6v3.596h2.4v1.346H15V10q0 .03.026.096h.001l-.001-.004H17.4v2.227a2.3 2.3 0 0 0 1.2 0v-2.227h2.374l-.002.004h.002l.01-.028A.3.3 0 0 0 21 10V8.942zm-2.4-2.543V5.195h3.6v1.204z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagFijiIcon);
export default ForwardRef;
