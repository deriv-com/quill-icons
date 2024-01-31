import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCaymanIslandsIcon = (
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
      fill='#012169'
      d='M0 2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M5 0v2.131L1.815.008C1.042.08.396.59.13 1.288L2.697 3H0v2h2.697L0 6.798V8h1.803L5 5.869V8h2V5.869L10.197 8H12V6.798L9.303 5H12V3H9.303L12 1.202V0h-1.803L7 2.131V0z'
    />
    <path fill='#F44336' d='M5.5 0v3.5H0v1h5.5V8h1V4.5H12v-1H6.5V0z' />
    <path
      fill='#F44336'
      d='m11.55 0-4.5 3h.9L12 .3V0zM0 8h.45l4.5-3h-.9L0 7.7zM.524.65 4.05 3h.902L.923.315A2 2 0 0 0 .524.65M7.95 5 12 7.7V8h-.45l-4.5-3z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path fill='#059334' d='M19.732 4a2 2 0 0 0-3.464 0z' />
    <path fill='#F44336' d='M15 4h6v1h-6z' />
    <path fill='#fff' d='M15 5h6v1h-6zM15 7h6v1h-6z' />
    <path
      fill='#0B50A0'
      d='M15 6h6v1h-6zM15 8h6v1h-6zM20.696 10h-5.392c.348.647 1.094 1.466 2.696 2 1.602-.534 2.348-1.353 2.696-2'
    />
    <path
      fill='#FFDA44'
      fillRule='evenodd'
      d='M13.5 9h1.466l.096.378c.155.617.723 1.922 2.938 2.6 2.215-.678 2.782-1.983 2.938-2.6L21.034 9H22.5v1h-.71c-.351.952-1.278 2.302-3.653 2.98l-.137.04-.137-.04c-2.375-.678-3.302-2.028-3.654-2.98H13.5z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M21 9h-6s0 .435.304 1h5.392C21 9.435 21 9 21 9' />
  </svg>
);
const ForwardRef = forwardRef(FlagCaymanIslandsIcon);
export default ForwardRef;
