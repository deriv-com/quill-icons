import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashLgFillIcon = (
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
      <path d='m1.484 5.734 5.704 4.454a7.8 7.8 0 0 1 4.062-2.07V6.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v1.367a7.56 7.56 0 0 1 6.133 6.133h1.367c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-1.367a7.6 7.6 0 0 1-.977 2.617l5.703 4.492c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L.353 7.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156M9.18 11.75l1.523 1.172c.508-.313 1.133-.547 1.797-.547a3.134 3.134 0 0 1 3.125 3.125c0 .39-.078.781-.234 1.133l1.523 1.172A4.9 4.9 0 0 0 17.5 15.5c0-2.734-2.266-5-5-5a5 5 0 0 0-3.32 1.25m4.804 8.555 2.188 1.718a7.5 7.5 0 0 1-2.422.899v1.328c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-1.328a7.56 7.56 0 0 1-6.172-6.133H3.75c-.703 0-1.25-.586-1.25-1.25 0-.703.547-1.25 1.25-1.25h1.328c.04-.312.117-.586.195-.86L7.5 15.188v.313c0 2.773 2.227 5 5 5 .508 0 1.016-.078 1.484-.195' />
    </g>
    <defs>
      <clipPath id='5194f9fc0a1a36353ebc6a3a43ca489d__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashLgFillIcon);
export default ForwardRef;
