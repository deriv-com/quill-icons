import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarLgRegularIcon = (
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
      <path d='M10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m.547-15.586 1.406 2.89 3.164.47c.235.039.43.195.508.43a.555.555 0 0 1-.156.624l-2.266 2.227.508 3.164c.039.234-.04.468-.234.586-.196.156-.47.156-.665.078L10 18.898l-2.852 1.485c-.195.078-.468.078-.664-.078-.195-.117-.273-.352-.234-.586l.547-3.164-2.305-2.227a.68.68 0 0 1-.156-.664c.078-.195.273-.39.508-.39l3.164-.47 1.406-2.89c.117-.195.352-.351.586-.351s.43.156.547.351m-1.563 3.711c-.078.195-.273.313-.468.352l-2.227.351 1.602 1.563c.156.156.234.351.195.547l-.39 2.226 1.992-1.055a.76.76 0 0 1 .585 0l1.993 1.055-.391-2.227c-.04-.195.04-.39.195-.546l1.602-1.563-2.227-.351c-.195 0-.39-.157-.468-.313L10 11.633z' />
    </g>
    <defs>
      <clipPath id='a7c21c646f720e0f70fb4dd73966483b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarLgRegularIcon);
export default ForwardRef;
