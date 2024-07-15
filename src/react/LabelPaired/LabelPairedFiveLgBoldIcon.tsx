import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7.531a.964.964 0 0 1 .938-.781h8.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H3.218l-.938 5.313h5.313c2.812 0 5.156 2.343 5.156 5.156 0 2.851-2.344 5.156-5.156 5.156h-3.75c-1.406 0-2.735-.781-3.36-2.07l-.156-.313a.925.925 0 0 1 .43-1.25.925.925 0 0 1 1.25.43l.156.312c.313.625.977 1.016 1.68 1.016h3.75a3.276 3.276 0 0 0 3.281-3.281 3.3 3.3 0 0 0-3.281-3.282H1.188a1 1 0 0 1-.743-.312 1.12 1.12 0 0 1-.195-.781z' />
    </g>
    <defs>
      <clipPath id='2f7a486af149f485f61488288f13acb3__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveLgBoldIcon);
export default ForwardRef;
