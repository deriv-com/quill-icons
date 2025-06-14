import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.469 16.906-1.813-1.812c-.5.281-1.062.406-1.656.406-.625 0-1.187-.125-1.687-.406L4.5 16.906a6.094 6.094 0 0 0 6.969 0m2.812.032h.031c.282.375.22.937-.124 1.28a1 1 0 0 1-1.282.095A7.97 7.97 0 0 1 8 20a8 8 0 0 1-4.937-1.687 1 1 0 0 1-1.282-.094 1 1 0 0 1-.093-1.282A8 8 0 0 1 0 12a7.97 7.97 0 0 1 1.688-4.906 1 1 0 0 1 .093-1.282c.344-.343.907-.406 1.282-.125C4.437 4.658 6.124 4 8 4c1.844 0 3.531.656 4.906 1.688.375-.282.938-.22 1.281.125a1 1 0 0 1 .094 1.28A7.97 7.97 0 0 1 15.97 12a8 8 0 0 1-1.688 4.938M12.875 15.5C13.563 14.5 14 13.313 14 12c0-1.281-.437-2.469-1.125-3.469l-1.812 1.813c.28.5.406 1.062.406 1.656 0 .625-.125 1.188-.406 1.688zm-1.406-8.375C10.469 6.438 9.28 6 8 6c-1.312 0-2.5.438-3.5 1.125l1.813 1.813A3.36 3.36 0 0 1 7.969 8.5c.625 0 1.187.156 1.687.438zm-6.563 6.563c-.281-.5-.406-1.063-.406-1.657 0-.625.125-1.187.406-1.687L3.094 8.53a6.095 6.095 0 0 0 0 6.969zM6.5 12c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281' />
    </g>
    <defs>
      <clipPath id='e480d7a6757d0bddf3072877d175f868__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingMdFillIcon);
export default ForwardRef;
