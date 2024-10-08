import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagEthiopiaIcon = (
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
      fill='#DA121A'
      d='M14.646 11c-.705.622-1.632 1-2.646 1a3.99 3.99 0 0 1-2.646-1H0v3a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-3z'
    />
    <path
      fill='#FCDD09'
      d='M14.646 11H24V5h-9.354A4 4 0 0 1 16 8a4 4 0 0 1-1.354 3M9.354 11A4 4 0 0 1 8 8a4 4 0 0 1 1.354-3H0v6z'
    />
    <path
      fill='#0F47AF'
      fillRule='evenodd'
      d='M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-5.308 1.798 1.306-.687 1.306.686-.25-1.454 1.057-1.031-1.46-.21-.653-1.325-.653 1.324-1.46.211 1.056 1.031zm-.313-3.523.601.634.191-.186-.6-.634zm2.606.634.601-.634-.191-.186-.601.634zm1.123 1.68-.822-.299-.088.252.822.298zm-3.424-.299-.822.299.088.251.822-.298zm1.456 1.942-.013-.874-.267.007.013.874z'
      clipRule='evenodd'
    />
    <path
      fill='#FCDD09'
      fillRule='evenodd'
      d='m11.998 9.111-1.306.687.249-1.455-1.056-1.031 1.46-.21.653-1.325.653 1.324 1.46.211-1.058 1.031.251 1.454'
      clipRule='evenodd'
    />
    <path
      fill='#FCDD09'
      fillRule='evenodd'
      d='m10.98 6.91-.601-.635.191-.186.601.634zM12.985 6.91l.601-.635-.191-.186-.601.634zM13.286 8.29l.822.299-.088.251-.822-.298zM10.684 8.29l-.822.299.088.251.822-.298zM12.127 9.358l.013.874-.267.007-.013-.874z'
      clipRule='evenodd'
    />
    <path
      fill='#078930'
      d='M22 0H2a2 2 0 0 0-2 2v3h9.354c.705-.622 1.632-1 2.646-1s1.94.378 2.646 1H24V2a2 2 0 0 0-2-2'
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
const ForwardRef = forwardRef(FlagEthiopiaIcon);
export default ForwardRef;
