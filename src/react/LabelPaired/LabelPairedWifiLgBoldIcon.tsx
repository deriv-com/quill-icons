import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiLgBoldIcon = (
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
      <path d='M1.563 12.766q-.704.507-1.329-.079-.507-.702.078-1.328A18.4 18.4 0 0 1 5.86 7.961Q8.984 6.75 12.5 6.75q3.516 0 6.64 1.21a18.4 18.4 0 0 1 5.547 3.4q.586.624.079 1.328-.626.585-1.328.078a16.3 16.3 0 0 0-5-3.047Q15.663 8.625 12.5 8.625q-3.165 0-5.937 1.094a16.3 16.3 0 0 0-5 3.047M12.5 15.5q-3.867.078-6.562 2.54-.665.546-1.329-.04-.507-.704.079-1.328a11.2 11.2 0 0 1 3.554-2.227 11.1 11.1 0 0 1 4.258-.82q2.265 0 4.258.82a11.2 11.2 0 0 1 3.555 2.227q.585.625.078 1.328-.665.586-1.328.04-2.696-2.463-6.563-2.54m2.188 6.563q-.04 1.25-1.094 1.875-1.095.624-2.188 0-1.055-.626-1.094-1.875.04-1.251 1.094-1.875 1.095-.626 2.188 0 1.055.624 1.094 1.875' />
    </g>
    <defs>
      <clipPath id='f976c4929786bfd509311dea659ef510__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiLgBoldIcon);
export default ForwardRef;
