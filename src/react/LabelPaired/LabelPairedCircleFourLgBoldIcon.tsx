import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourLgBoldIcon = (
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
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m8.71-4.922c.509.156.782.664.587 1.172l-1.445 4.375h2.773v-2.187c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v2.187h.313a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H12.5v1.563c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V18H6.563a.91.91 0 0 1-.782-.39c-.156-.235-.234-.547-.117-.82l1.875-5.626c.156-.508.703-.781 1.172-.586' />
    </g>
    <defs>
      <clipPath id='e55fca4f5f399be4db557a013d335cca__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourLgBoldIcon);
export default ForwardRef;
