import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardXlBoldIcon = (
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
        d='M13.5 10.406v4.64l8.297-5.812c.219-.156.484-.234.797-.234.406 0 .734.14.984.422.281.25.422.578.422.984v15.188c0 .406-.14.734-.422.984-.25.281-.578.422-.984.422-.282 0-.547-.078-.797-.234L13.5 20.953v4.64c0 .407-.14.735-.422.985-.25.281-.578.422-.984.422-.313 0-.594-.094-.844-.281L.469 18.89A1.032 1.032 0 0 1 0 18c0-.375.156-.672.469-.89L11.25 9.28c.25-.187.531-.281.844-.281.406 0 .734.14.984.422.281.25.422.578.422.984m0 7.406v.375L21.75 24V12.047zM3.047 18l8.203 5.953V12.047z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlBoldIcon);
export default ForwardRef;
