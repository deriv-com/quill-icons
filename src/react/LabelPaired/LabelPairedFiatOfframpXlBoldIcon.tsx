import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.188 16.172c1.406 0 2.718-.75 3.421-1.969a3.94 3.94 0 0 0 0-3.937c-.703-1.22-2.015-1.97-3.421-2.016-1.407 0-2.72.797-3.422 2.016a3.94 3.94 0 0 0 0 3.937 3.96 3.96 0 0 0 3.422 1.969m-3.938.844v9c0 .937.797 1.734 1.734 1.734h9c-.89-1.031-1.406-2.437-1.406-3.937 0-2.016.985-3.844 2.531-4.97l-2.953-2.952a6.08 6.08 0 0 1-4.969 2.53c-1.5 0-2.906-.515-3.937-1.405M20.766 27.75a3.9 3.9 0 0 0 3.937-3.937 3.93 3.93 0 0 0-3.937-3.938q-.774 0-1.407.281h-.047c-1.453.563-2.484 2.016-2.484 3.657a3.93 3.93 0 0 0 3.938 3.937m-1.5-9.937c.468-.141.984-.188 1.5-.188 3.422 0 6.234 2.766 6.234 6.188S24.188 30 20.766 30H6.984A3.98 3.98 0 0 1 3 26.016V12.234C3 8.813 5.766 6 9.188 6s6.187 2.813 6.187 6.234c0 .516-.047 1.032-.187 1.5zm2.25-7.454c.609 0 1.125.516 1.125 1.125v4.36c0 .469-.282.844-.703 1.031-.422.188-.891.094-1.22-.234l-4.359-4.36c-.422-.422-.422-1.125 0-1.594.422-.421 1.172-.421 1.594 0l2.438 2.438v-1.64c0-.61.468-1.126 1.125-1.126m-.188 10.079H20.25v.468c-.75.235-1.219.938-1.219 1.688 0 .984.797 1.781 1.735 1.781a.64.64 0 0 1 .656.656.67.67 0 0 1-.656.657c-.328 0-.657-.329-.657-.657v-.187h-1.078v.187c0 .75.469 1.407 1.219 1.64v.517h1.078v-.47c.703-.28 1.219-.937 1.219-1.687a1.78 1.78 0 0 0-1.781-1.781.67.67 0 0 1-.657-.656.67.67 0 0 1 .657-.657.64.64 0 0 1 .656.657v.14h1.125v-.14c0-.75-.516-1.407-1.219-1.688zM8.484 9.047h-.89v.937h-.89v.891h.89v2.719h-.89v.89h.89v.891h.89v-.89h.938v.89h.89v-.89c.704 0 1.313-.61 1.313-1.36 0-.328-.094-.656-.328-.89a1.346 1.346 0 0 0-.094-1.922c-.234-.235-.562-.329-.89-.329v-.937h-.891v.937h-.938zm1.829 3.61c.234 0 .421.234.421.468s-.187.469-.421.469H8.484v-.938zm0-1.782c.234 0 .421.188.421.469a.42.42 0 0 1-.421.422H8.484v-.891z' />
    </g>
    <defs>
      <clipPath id='56ca85766bbdf41a258ff60d38ce0247__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpXlBoldIcon);
export default ForwardRef;
