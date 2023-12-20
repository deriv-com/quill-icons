import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBellOnXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M28.406 6.422c.188.406.078.734-.328.984l-3 1.5c-.437.188-.765.078-.984-.328-.188-.437-.078-.765.328-.984l3-1.5c.406-.188.734-.078.984.328M14.25 6.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v.797c1.938.219 3.531 1.016 4.781 2.39C21.813 11.314 22.47 13 22.5 15v1.36c.031 2.124.781 3.953 2.25 5.484l.14.14c.407.407.61.891.61 1.453 0 .594-.203 1.079-.61 1.454-.374.406-.859.609-1.453.609H6.564c-.594 0-1.079-.203-1.454-.61-.406-.374-.609-.859-.609-1.453 0-.562.203-1.062.61-1.5l.14-.093c1.469-1.532 2.219-3.36 2.25-5.485V15c.063-2 .719-3.687 1.969-5.062 1.25-1.376 2.844-2.172 4.781-2.391zM15 9c-1.687.031-3.11.61-4.266 1.734C9.61 11.891 9.031 13.313 9 15v1.36c-.031 2.53-.937 4.703-2.719 6.515l-.093.14a.583.583 0 0 0-.188.422c.031.344.219.532.563.563h16.875c.343-.031.53-.219.562-.562a.583.583 0 0 0-.187-.422l-.094-.141c-1.782-1.812-2.688-3.984-2.719-6.516V15c-.031-1.687-.625-3.11-1.781-4.266C18.094 9.61 16.687 9.031 15 9m-1.406 18.516c.25.625.719.953 1.406.984.688-.031 1.156-.36 1.406-.984.188-.438.516-.594.985-.47.406.188.547.5.422.938a3.13 3.13 0 0 1-1.079 1.453c-.5.375-1.078.563-1.734.563a2.812 2.812 0 0 1-1.734-.562 3.13 3.13 0 0 1-1.078-1.454c-.126-.437.015-.75.421-.937.47-.125.797.031.985.469M0 14.25c.031-.469.281-.719.75-.75H4.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75c-.469-.031-.719-.281-.75-.75m25.5-.75h3.75c.469.031.719.281.75.75-.031.469-.281.719-.75.75H25.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75M1.922 7.406c-.406-.25-.516-.578-.328-.984.218-.406.547-.516.984-.328l3 1.5c.406.218.516.547.328.984-.218.406-.547.516-.984.328z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnXlRegularIcon);
export default ForwardRef;
