import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashLgFillIcon = (
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
      <path d='M1.484 5.734 7.5 10.422a4.993 4.993 0 0 1 5-4.922c2.734 0 5 2.266 5 5 0 2.344-1.602 4.258-3.71 4.844l10.82 8.515c.43.313.507.899.156 1.29-.313.43-.899.507-1.29.156L.353 7.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m8.829 11.68 10.195 8.008c-.156.078-.274.078-.43.078H4.883a1.134 1.134 0 0 1-1.133-1.133c0-3.71 2.89-6.758 6.563-6.953' />
    </g>
    <defs>
      <clipPath id='f7cde1ec76c438a2442ec2857ec5fc96__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashLgFillIcon);
export default ForwardRef;
