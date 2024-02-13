import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.375 9.25a2.04 2.04 0 0 0-.547-1.328A2.04 2.04 0 0 0 7.5 7.375q-.781.039-1.328.547-.508.546-.547 1.328v6.25q.039.78.547 1.328.546.508 1.328.547.781-.039 1.328-.547.508-.546.547-1.328zm-5.625 0q.038-1.602 1.094-2.656Q5.898 5.539 7.5 5.5q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656v6.25q-.039 1.602-1.094 2.656Q9.102 19.211 7.5 19.25q-1.602-.038-2.656-1.094Q3.789 17.102 3.75 15.5zM2.5 13.938V15.5q.04 2.109 1.445 3.555Q5.391 20.46 7.5 20.5q2.109-.04 3.555-1.445Q12.46 17.609 12.5 15.5v-1.562q.078-.86.938-.938.858.078.937.938V15.5q-.039 2.656-1.719 4.531-1.64 1.876-4.219 2.266v1.328h1.876q.858.078.937.938-.079.858-.937.937H4.688q-.86-.079-.938-.937.078-.86.938-.938h1.875v-1.328q-2.579-.39-4.22-2.266Q.665 18.156.626 15.5v-1.562q.078-.86.938-.938.858.078.937.938' />
    </g>
    <defs>
      <clipPath id='cc96b2be180aeadf83e95428f20b593e__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneLgBoldIcon);
export default ForwardRef;
