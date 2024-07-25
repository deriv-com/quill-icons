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
      <path d='M22.5 5.5a.95.95 0 0 1 .938.938v18.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V6.438c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v14.375c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V10.188c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v10.625c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V13.938c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v6.875c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-6.875c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v3.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.125c0-.508.39-.938.937-.938' />
    </g>
    <defs>
      <clipPath id='9d52706eeb4723bed6f08e69924a5d40__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgBoldIcon);
export default ForwardRef;
