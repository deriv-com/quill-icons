import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 7.5c3.75 0 6.797 1.734 9 3.797 2.203 2.015 3.656 4.453 4.36 6.14.14.375.14.797 0 1.172-.704 1.641-2.157 4.078-4.36 6.141s-5.25 3.75-9 3.75c-3.797 0-6.844-1.687-9.047-3.75s-3.656-4.5-4.36-6.14a1.68 1.68 0 0 1 0-1.172c.704-1.688 2.157-4.125 4.36-6.141C6.656 9.234 9.703 7.5 13.5 7.5M6.75 18a6.71 6.71 0 0 0 3.375 5.86c2.063 1.218 4.64 1.218 6.75 0 2.063-1.22 3.375-3.422 3.375-5.86 0-2.39-1.312-4.594-3.375-5.812-2.11-1.22-4.687-1.22-6.75 0A6.7 6.7 0 0 0 6.75 18m6.75-3c0-.328-.094-.61-.187-.937-.094-.235.093-.563.374-.563a4.53 4.53 0 0 1 4.126 3.375c.656 2.39-.75 4.828-3.188 5.484-2.39.657-4.875-.797-5.484-3.187A3.5 3.5 0 0 1 9 18.234c-.047-.28.281-.468.516-.375.328.094.609.141.984.141 1.64 0 3-1.312 3-3' />
    </g>
    <defs>
      <clipPath id='ae8f6b1295aafe67fec3350ee478610b__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeXlFillIcon);
export default ForwardRef;
