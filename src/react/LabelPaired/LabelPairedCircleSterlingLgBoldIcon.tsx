import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingLgBoldIcon = (
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
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.195-3.75c-.664 0-1.172.547-1.172 1.21v1.29h1.602c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H9.023v.39q0 1.114-.351 2.11h4.14a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H7.187c-.351 0-.664-.156-.82-.43a1 1 0 0 1-.039-.937l.39-.703c.313-.586.43-1.25.43-1.875v-.43h-.273a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.273v-1.29c0-1.679 1.368-3.085 3.047-3.085.39 0 .782.078 1.133.234l1.211.47a.935.935 0 0 1 .508 1.21c-.195.508-.742.742-1.211.547l-1.211-.469a.8.8 0 0 0-.43-.117' />
    </g>
    <defs>
      <clipPath id='913ea206b6c0f8eaf31ff3c83bde7816__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingLgBoldIcon);
export default ForwardRef;
