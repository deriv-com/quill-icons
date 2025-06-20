import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.078 14.813A.67.67 0 0 1 6.61 15H2.625A1.11 1.11 0 0 0 1.5 16.125v3.75c0 .656.469 1.125 1.125 1.125h3.984c.141 0 .329.094.47.188l6.421 5.718V9.141zM13.594 7.5c.75 0 1.406.656 1.406 1.406v18.235c0 .75-.656 1.359-1.406 1.359-.375 0-.703-.094-.938-.328l.516-.563-.516.563L6.281 22.5H2.625A2.62 2.62 0 0 1 0 19.875v-3.75C0 14.719 1.172 13.5 2.625 13.5h3.656l6.375-5.625a1.3 1.3 0 0 1 .938-.375m5.672 6.234L22.5 16.97l3.188-3.235c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L23.53 18l3.235 3.234c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L22.5 19.079l-3.234 3.235c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L21.422 18l-3.235-3.187c-.28-.282-.28-.797 0-1.079.282-.28.797-.28 1.079 0' />
    </g>
    <defs>
      <clipPath id='a82c51c7308be583aab29a0c151caf9f__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkXlRegularIcon);
export default ForwardRef;
