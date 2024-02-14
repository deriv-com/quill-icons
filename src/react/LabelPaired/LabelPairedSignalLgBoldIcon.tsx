import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.5 5.5q.859.078.938.938v18.125q-.079.858-.938.937-.86-.079-.937-.937V6.438q.078-.86.937-.938m-5 3.75q.859.078.938.938v14.375q-.079.858-.938.937-.86-.079-.937-.937V10.188q.078-.86.937-.938m-5 3.75q.859.078.938.938v10.625q-.079.858-.938.937-.86-.079-.937-.937V13.938q.078-.86.937-.938m-5 3.75q.859.078.938.938v6.875q-.079.858-.938.937-.86-.079-.937-.937v-6.875q.078-.86.937-.938m-5 3.75q.859.078.938.938v3.125q-.079.858-.938.937-.86-.079-.937-.937v-3.125q.078-.86.937-.938' />
    </g>
    <defs>
      <clipPath id='e11a86d433a7fb2f29d48b015c096da4__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgBoldIcon);
export default ForwardRef;
