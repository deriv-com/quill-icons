import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.25 6.375c0 .984.766 1.75 1.75 1.75V7.25a.9.9 0 0 0-.875-.875zm-.875 0h-8.75A2.626 2.626 0 0 1 1 9v3.5a2.626 2.626 0 0 1 2.625 2.625h8.75A2.626 2.626 0 0 1 15 12.5V9a2.626 2.626 0 0 1-2.625-2.625M1 14.25c0 .492.383.875.875.875h.875c0-.957-.793-1.75-1.75-1.75zm14-.875c-.984 0-1.75.793-1.75 1.75h.875A.88.88 0 0 0 15 14.25zm-13.125-7A.88.88 0 0 0 1 7.25v.875c.957 0 1.75-.766 1.75-1.75zm-1.75.875c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm9.625 3.5c0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531m-4.375 0c0-.93.492-1.777 1.313-2.27a2.65 2.65 0 0 1 2.625 0c.792.493 1.312 1.34 1.312 2.27 0 .957-.52 1.805-1.312 2.297a2.65 2.65 0 0 1-2.626 0 2.65 2.65 0 0 1-1.312-2.297' />
    </g>
    <defs>
      <clipPath id='5a8ff6d1f7d3f7f7b2bf6e09aca89ffd__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillSmRegularIcon);
export default ForwardRef;
