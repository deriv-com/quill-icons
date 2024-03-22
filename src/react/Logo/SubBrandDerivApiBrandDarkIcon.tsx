import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivApiBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 268 58'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fill='#FF444F'
        d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483z'
      />
      <path
        fill='#fff'
        d='m178.939 44.745-6.466 13.223h-7.875c4.932-10.007 9.776-19.215 14.534-27.637q7.135-12.633 14.17-23.851h7.059c.97 3.718 1.88 7.467 2.733 11.257q1.28 5.685 2.556 11.923c.849 4.16 1.689 8.573 2.522 13.229q1.245 6.982 2.636 15.079h-7.28a291 291 0 0 1-1.084-6.724q-.504-3.382-1.068-6.499zm21.412-5.798a385 385 0 0 0-2.111-11.96q-1.144-5.94-2.574-12.26-2.366 3.792-5.862 9.77c-2.331 3.99-4.955 8.803-7.878 14.45zM235.617 5.96q8.988.001 13.769 3.422c3.184 2.28 4.911 5.592 5.18 9.952.207 3.367-.246 6.281-1.356 8.73-1.112 2.455-2.784 4.468-5.014 6.058q-3.349 2.375-8.178 3.525-4.835 1.154-10.851 1.155h-5.127l-3.426 19.166h-7.206l9.056-50.817q3.075-.742 6.552-.968c2.319-.145 4.521-.223 6.601-.223m-.517 6.094c-3.519 0-5.641.103-6.372.296l-3.647 20.43h4.68c2.082 0 4.199-.181 6.356-.556 2.157-.37 4.072-1.028 5.75-1.965a10.94 10.94 0 0 0 4.031-3.906q1.517-2.485 1.277-6.42-.26-4.236-3.496-6.06-3.232-1.82-8.579-1.819m25.604-5.574h7.207l-9.164 51.488h-7.207z'
      />
    </g>
    <defs>
      <clipPath id='1bbc8f0e309801971eeff9fe51436dca__a'>
        <path fill='#fff' d='M0 0h268v58H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivApiBrandDarkIcon);
export default ForwardRef;
