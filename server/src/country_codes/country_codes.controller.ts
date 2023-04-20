import { CountryCodesService } from './country_codes.service';
import { CreateCountryCodeDto } from './dto/create-country_code.dto';
import { UpdateCountryCodeDto } from './dto/update-country_code.dto';

@Controller('country-codes')
export class CountryCodesController {
  constructor(private readonly countryCodesService: CountryCodesService) {}

  @Post()
  create(@Body() createCountryCodeDto: CreateCountryCodeDto) {
    return this.countryCodesService.create(createCountryCodeDto);
  }

  @Get()
  findAll() {
    return this.countryCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryCodeDto: UpdateCountryCodeDto,
  ) {
    return this.countryCodesService.update(+id, updateCountryCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryCodesService.remove(+id);
  }
}
