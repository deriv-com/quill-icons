import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardXlRegularIcon = (
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
        d='M1.781 18 12 25.406V10.594zm10.313-9c.406 0 .734.14.984.422.281.25.422.578.422.984v4.828l8.25-5.953c.25-.187.531-.281.844-.281.406 0 .734.14.984.422.281.25.422.578.422.984v15.188c0 .406-.14.734-.422.984-.25.281-.578.422-.984.422-.313 0-.594-.094-.844-.281l-8.25-5.953v4.828c0 .406-.14.734-.422.984-.25.281-.578.422-.984.422-.313 0-.594-.094-.844-.281L.469 18.89A1.032 1.032 0 0 1 0 18c0-.375.156-.672.469-.89L11.25 9.28c.25-.187.531-.281.844-.281m1.406 9.89 9 6.516V10.594l-9 6.515z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlRegularIcon);
export default ForwardRef;
