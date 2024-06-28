import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.25 8.703-.156.664a6.55 6.55 0 0 1-2.813 3.79l-.117.077a3.1 3.1 0 0 0-.82.782.624.624 0 0 1-.86.156c-.273-.235-.351-.625-.156-.899A4.5 4.5 0 0 1 7.5 12.18l.117-.078a5.35 5.35 0 0 0 2.266-3.086l.156-.625c.352-1.172 1.524-1.875 2.695-1.563 1.172.352 1.875 1.524 1.563 2.695l-.195.665a11 11 0 0 1-.586 1.562H17.5c1.367 0 2.5 1.133 2.5 2.5 0 .703-.312 1.328-.742 1.797q.117.352.117.703c0 .742-.352 1.406-.82 1.875.117.273.195.625.195.938 0 .937-.508 1.757-1.25 2.187 0 1.406-1.133 2.5-2.5 2.5h-3.516c-.859 0-1.718-.234-2.421-.703L7.539 22.53c-.469-.351-.898-.742-1.21-1.25-.196-.273-.118-.664.194-.86.274-.194.665-.116.86.196.234.352.508.625.86.86l1.523 1.015c.507.352 1.093.508 1.718.508H15c.664 0 1.25-.547 1.25-1.25 0-.078-.04-.156-.04-.234-.077-.313.118-.664.43-.743.47-.156.86-.625.86-1.171 0-.313-.117-.586-.273-.782-.118-.156-.157-.312-.118-.508a.6.6 0 0 1 .313-.43c.43-.195.703-.624.703-1.093a1.1 1.1 0 0 0-.195-.625.617.617 0 0 1 .234-.82c.352-.235.586-.625.586-1.055 0-.703-.586-1.25-1.25-1.25h-5.04c-.233 0-.429-.156-.546-.351a.6.6 0 0 1 0-.626c.43-.664.781-1.445.977-2.226l.195-.625a.98.98 0 0 0-.664-1.172.98.98 0 0 0-1.172.664m-10 5.547V23h2.5v-8.75zm-1.25 0C0 13.586.547 13 1.25 13h2.5c.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25h-2.5C.547 24.25 0 23.703 0 23z' />
    </g>
    <defs>
      <clipPath id='6b9cb62c3d9011f01b6633b541d8ca16__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpLgRegularIcon);
export default ForwardRef;
