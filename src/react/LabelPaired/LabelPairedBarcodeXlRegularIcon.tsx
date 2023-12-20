import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeXlRegularIcon = (
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
        d='M0 8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75zm3 0c.031-.469.281-.719.75-.75.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75zm3.75-.75c.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.25c.031-.469.281-.719.75-.75m3.75.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75zm3.75-.75c.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.25c.031-.469.281-.719.75-.75m3.75.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75zm5.25-.75c.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.25c.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeXlRegularIcon);
export default ForwardRef;
