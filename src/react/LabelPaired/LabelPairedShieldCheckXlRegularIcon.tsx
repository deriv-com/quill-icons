import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.438 7.734 3.14 11.25q-.844.422-.891 1.313 0 2.25.75 5.25.797 2.952 2.766 5.765 2.014 2.813 5.625 4.64.609.282 1.218 0 3.61-1.78 5.579-4.64 2.014-2.813 2.812-5.765.75-3 .75-5.25-.047-.891-.89-1.313l-8.25-3.516q-.61-.234-1.172 0m1.734-1.359 8.297 3.516q.797.327 1.265 1.03.516.705.516 1.642.047 2.39-.797 5.624-.843 3.235-3.047 6.282-2.156 3.093-6.187 5.11-1.219.561-2.438 0-4.031-2.017-6.187-5.11-2.204-3.047-3.047-6.282-.844-3.233-.797-5.625 0-.936.516-1.64A2.74 2.74 0 0 1 2.53 9.89l8.297-3.516a3.05 3.05 0 0 1 2.344 0M12 14.625q-1.03.095-1.125 1.125.095 1.032 1.125 1.125 1.032-.093 1.125-1.125-.093-1.03-1.125-1.125m2.625 1.125q0 .89-.516 1.594-.514.656-1.359.937v3.469q-.047.704-.75.75-.703-.046-.75-.75v-3.469a2.8 2.8 0 0 1-1.36-.937q-.515-.703-.515-1.594.047-1.125.75-1.875.75-.703 1.875-.75 1.125.047 1.875.75.703.75.75 1.875' />
    </g>
    <defs>
      <clipPath id='0664aac7033e9ff75881812f63edaad7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckXlRegularIcon);
export default ForwardRef;
