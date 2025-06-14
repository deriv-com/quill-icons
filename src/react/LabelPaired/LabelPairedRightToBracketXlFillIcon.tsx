import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.172 10.969 5.765 5.765c.329.328.563.797.563 1.266 0 .516-.234.984-.562 1.313l-5.766 5.765c-.281.281-.703.422-1.125.422A1.56 1.56 0 0 1 7.5 23.953V21h-6A1.48 1.48 0 0 1 0 19.5v-3c0-.797.656-1.5 1.5-1.5h6v-2.906c0-.844.703-1.594 1.547-1.594.422 0 .844.188 1.125.469M16.5 25.5h3c.797 0 1.5-.656 1.5-1.5V12c0-.797-.703-1.5-1.5-1.5h-3A1.48 1.48 0 0 1 15 9c0-.797.656-1.5 1.5-1.5h3c2.484 0 4.5 2.016 4.5 4.5v12c0 2.484-2.016 4.5-4.5 4.5h-3A1.48 1.48 0 0 1 15 27c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='733c0d59168dec8deacc3d5d5a087ddc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketXlFillIcon);
export default ForwardRef;
