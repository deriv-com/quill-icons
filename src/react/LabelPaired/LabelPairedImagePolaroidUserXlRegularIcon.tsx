import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 24H1.5v1.5c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5V24zm-.094-1.5H19.5v-12c0-.797-.703-1.5-1.5-1.5H3c-.844 0-1.5.703-1.5 1.5v12h3.797c.375-1.687 1.875-3 3.703-3h3c1.781 0 3.328 1.313 3.656 3m-8.812 0h7.265C13.781 21.656 12.938 21 12 21H9c-.984 0-1.828.656-2.156 1.5M21 10.5v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3M12 15c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5m-1.5-3c1.031 0 2.016.61 2.578 1.5.516.938.516 2.11 0 3-.562.938-1.547 1.5-2.578 1.5a3.05 3.05 0 0 1-2.625-1.5c-.516-.89-.516-2.062 0-3 .563-.89 1.547-1.5 2.625-1.5' />
    </g>
    <defs>
      <clipPath id='a878d0313d0659703fda81211ceb4573__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserXlRegularIcon);
export default ForwardRef;
