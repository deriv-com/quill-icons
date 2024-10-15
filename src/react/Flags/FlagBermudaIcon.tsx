import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagBermudaIcon = (
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
    <path fill='#C8102E' d='M24 2a2 2 0 0 0-2-2H12v8H0v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2z' />
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
      fill='#042C90'
      d='M5 8H1.803L5 5.869zM7 8h3.197L7 5.869zM12 6.798V5H9.303zM12 3V1.202L9.303 3zM10.197 0H7v2.131zM5 0H2q-.093 0-.185.008L5 2.131zM.13 1.289C.046 1.509 0 1.749 0 2v1h2.697zM0 5v1.798L2.697 5z'
    />
    <path
      fill='#fff'
      d='M14.78 3.583v3.75c0 .88.458 1.645 1.017 2.25h3.966c-.869.942-1.98 1.499-1.983 1.5 0 0 3-1.5 3-3.75v-3.75z'
    />
    <path fill='#2F8F22' d='M19.763 9.583c-.87.944-1.983 1.5-1.983 1.5s-1.113-.556-1.983-1.5z' />
    <path
      fill='#65B5D2'
      d='M17.03 7.333a.75.75 0 0 1-.75.75 1.5 1.5 0 0 0 3 0 .75.75 0 0 1-.6-1.2c-.25-.188-.562-.3-.9-.3s-.65.112-.9.3c.094.126.15.281.15.45'
    />
    <path
      fill='#E00A0B'
      d='M17.78 6.583a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16.28 8.083a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M20.03 7.333a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0'
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
const ForwardRef = forwardRef(FlagBermudaIcon);
export default ForwardRef;