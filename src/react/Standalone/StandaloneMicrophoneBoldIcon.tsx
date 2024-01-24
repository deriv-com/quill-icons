import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneMicrophoneBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M17.875 10.25a2.04 2.04 0 0 0-.547-1.328A2.04 2.04 0 0 0 16 8.375q-.78.039-1.328.547-.508.546-.547 1.328v6.25q.039.78.547 1.328.546.508 1.328.547.78-.039 1.328-.547.508-.546.547-1.328zm-5.625 0q.039-1.602 1.094-2.656Q14.398 6.539 16 6.5q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656v6.25q-.038 1.602-1.094 2.656Q17.602 20.211 16 20.25q-1.602-.038-2.656-1.094-1.055-1.054-1.094-2.656zM11 14.938V16.5q.04 2.109 1.445 3.555Q13.891 21.46 16 21.5q2.109-.04 3.555-1.445Q20.96 18.609 21 16.5v-1.562q.078-.86.938-.938.858.078.937.938V16.5q-.039 2.656-1.719 4.531-1.64 1.876-4.218 2.266v1.328h1.875q.858.078.937.938-.078.858-.937.937h-5.625q-.86-.079-.938-.937.078-.86.938-.938h1.874v-1.328q-2.577-.39-4.218-2.266-1.68-1.875-1.719-4.531v-1.562q.078-.86.938-.938.858.078.937.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMicrophoneBoldIcon);
export default ForwardRef;
