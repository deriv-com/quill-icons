import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyGbpIcon = (
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
    <path fill='#fff' d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' />
    <path
      fill='#283991'
      d='M20.174.551c2.047.552 3.932 1.5 5.567 2.757l-5.567 5.567zM.551 11.826A15.9 15.9 0 0 1 3.308 6.26l5.567 5.567zM28.693 6.259a15.9 15.9 0 0 1 2.756 5.567h-8.324zM.551 20.174a15.9 15.9 0 0 0 2.757 5.567l5.567-5.567zM6.259 28.692a15.9 15.9 0 0 0 5.567 2.757v-8.324zM6.259 3.308A15.9 15.9 0 0 1 11.826.55v8.324zM20.174 31.449a15.9 15.9 0 0 0 5.567-2.757l-5.567-5.567zM28.693 25.741l-5.568-5.567h8.324a15.9 15.9 0 0 1-2.757 5.567'
    />
    <path
      fill='#F44336'
      d='M31.865 13.913H18.087V.135a16.2 16.2 0 0 0-4.174 0v13.778H.135a16.2 16.2 0 0 0 0 4.174h13.778v13.778a16.2 16.2 0 0 0 4.174 0V18.087h13.778a16.2 16.2 0 0 0 0-4.174'
    />
    <path
      fill='#F44336'
      d='m20.174 20.174 7.14 7.14q.492-.494.94-1.027l-6.112-6.113zM11.826 20.174v1.967l-6.113 6.113a16 16 0 0 1-1.027-.94zM11.83 11.826l-7.14-7.14q-.492.494-.94 1.027l6.113 6.113zM27.314 4.686l-7.14 7.14V9.86l6.113-6.113q.533.448 1.027.94'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyGbpIcon);
export default ForwardRef;
