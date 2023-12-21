import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBadgeCheckXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.375 9.844c-.312.5-.75.672-1.312.515-1.094-.312-2.079-.062-2.954.75-.812.875-1.062 1.86-.75 2.954.157.562-.015 1-.515 1.312-1 .563-1.531 1.438-1.594 2.625.063 1.188.594 2.063 1.594 2.625.5.313.672.75.515 1.313-.312 1.093-.062 2.078.75 2.953.875.812 1.86 1.062 2.954.75.562-.157 1 .015 1.312.515.563 1 1.438 1.532 2.625 1.594 1.188-.062 2.063-.594 2.625-1.594.313-.5.75-.672 1.313-.515 1.093.28 2.078.03 2.953-.75.812-.875 1.062-1.86.75-2.953-.157-.563.03-1 .562-1.313.969-.562 1.485-1.437 1.547-2.625-.062-1.187-.578-2.062-1.547-2.625-.531-.312-.719-.75-.562-1.312.312-1.094.062-2.079-.75-2.954-.875-.812-1.86-1.062-2.953-.75-.563.157-1-.015-1.313-.515-.562-1-1.437-1.531-2.625-1.594-1.187.063-2.062.594-2.625 1.594M12 6c1.75.063 3.125.734 4.125 2.016 1.625-.188 3.078.312 4.36 1.5 1.187 1.28 1.687 2.734 1.5 4.359 1.28 1 1.953 2.375 2.015 4.125-.062 1.75-.734 3.125-2.016 4.125.188 1.625-.312 3.078-1.5 4.36-1.28 1.187-2.734 1.687-4.359 1.5-1 1.28-2.375 1.953-4.125 2.015-1.75-.062-3.125-.734-4.125-2.016-1.625.188-3.078-.312-4.36-1.5-1.187-1.28-1.687-2.734-1.5-4.359C.736 21.125.063 19.75 0 18c.063-1.75.734-3.125 2.016-4.125-.188-1.625.312-3.078 1.5-4.36 1.28-1.187 2.734-1.687 4.359-1.5C8.875 6.736 10.25 6.063 12 6m5.297 9.797-6 6c-.531.437-1.063.437-1.594 0l-3-3c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l2.203 2.203 5.203-5.203c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckXlBoldIcon);
export default ForwardRef;