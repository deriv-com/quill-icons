import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.93 22.727-6.68-5.586v-3.243l6.68-5.585c.39-.313.898-.391 1.328-.196.43.235.742.664.742 1.133v12.5c0 .508-.312.938-.742 1.133-.43.234-.938.156-1.328-.156M10 19.25v2.5c0 .508-.312.938-.742 1.133-.43.234-.938.156-1.328-.156l-7.5-6.25A1.27 1.27 0 0 1 0 15.5c0-.352.156-.703.43-.937l7.5-6.25c.39-.313.898-.391 1.328-.196.43.235.742.664.742 1.133v10' />
    </g>
    <defs>
      <clipPath id='459734a37f11a31db4e8b020110cf1d8__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgFillIcon);
export default ForwardRef;
